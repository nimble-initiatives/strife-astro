import jwt from 'jsonwebtoken';
import { store } from "strife:store";

export async function onRequest(context, next) {

  const authenticate = (token) => {
    const result = tokenVerify(token, import.meta.env.SECRET, import.meta.env.TEAM_ID);
    return result.valid;
  };

  const tokenVerify = (token, secret, teamId) => {
    try {
      // Verify the token using the secret
      const decoded = jwt.verify(token, secret);

      // Check if the "workspace" claim exists and matches the WORKSPACE_ID
      if (decoded.workspace === teamId) {
        return { valid: true, decoded };
      } else {
        return { valid: false, error: 'Invalid workspace claim' };
      }
    } catch (error) {
      // Handle verification errors (e.g., token expired, invalid signature)
      return { valid: false, error: error.message };
    }
  }
  // Verify Strife token if present. Run this before any other code only once.
  // This is a workaround for the lack of a global setup function in Astro.
  // On other pages you can then import config property EDIT_MODE and check if it's true.
  const { searchParams, pathname } = context.url;

  const token = searchParams.get("token");
  let isEditMode = false;
  if (token) {
    isEditMode = authenticate(token);
  }
  context.locals.editMode = isEditMode;

  const session = store.openSession();
  const pageData = await session
    .query({ indexName: "Content/ByUrlzz" })
    .whereEquals("url", pathname)
    .selectFields([
      "id",
      "displayName",
      "url",
      "origin",
      "collection",
      "publishedDate",
      "createdAt",
      "labels",
      "deleted",
    ])
    .singleOrNull();
  context.locals.pageData = pageData;

  // Redirect to /404 if page is not published
  const isPublished =
    pageData &&
    !pageData.deleted &&
    pageData.publishedDate &&
    new Date(pageData.publishedDate) < new Date();
  if (pageData != null && !isPublished && !isEditMode) {
    return new Response(null, {
      status: 302, // Set to 302 so Astro will not stop processing the request (including rendering the /404 page)
      headers: { Location: "/404" }, //Correct status is set in the /404 page
    });
  }

  // return a Response or the result of calling `next()`
  return next();
}
