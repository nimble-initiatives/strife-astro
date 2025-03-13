import type { Template } from "@strifeapp/types";

const Articles: Template = {
  displayName: "Article",
  description: null,
  collection: "Articles",
  type: null,
  html: null,
  editors: [
    {
      label: "Tabs",
      description: "",
      editor: {
        name: "str-tab-group",
        type: "str-tab-group",
        propertyName: "tabs",
        options: {
          tabs: [
            {
              name: "Content",
              value: "content",
            },
            {
              name: "Listing",
              value: "listing",
            },
          ],
        },
      },
      searchable: true,
    },
    {
      label: "Heading",
      description: "",
      editor: {
        name: "str-input",
        type: "text",
        propertyName: "heading",
        attributes: {
          tabGroup: ["tabs-listing"],
          required: false,
          validationText: "Heading is required",
        },
      },
      searchable: false,
    },
    {
      label: "Text",
      editor: {
        name: "str-textarea",
        propertyName: "text",
        type: "text",
        attributes: {
          tabGroup: ["tabs-listing"],
        },
      },
    },
    {
      label: "List image",
      description: "",
      editor: {
        name: "str-image-group",
        type: "image-group",
        propertyName: "image",
        options: {
          medias: [
            {
              name: "Desktop",
              width: 466,
              height: 233,
            },
            {
              name: "Tablet",
              width: 728,
              height: 546,
            },
          ],
        },
        attributes: {
          tabGroup: ["tabs-listing"],
        },
      },
      searchable: true,
    },
    {
      label: "Sections",
      description: "",
      editor: {
        name: "str-chapters",
        type: "chapters",
        propertyName: "sections",
        attributes: {
          tabGroup: ["tabs-content"],
        },
        options: {
          availableTypes: ["text", "content", "hero"],
        },
      },
      searchable: false,
    },
  ],
  templateType: "dt",
  normalizedName: "article",
  disableURL: false,
  archived: false,
  icon: "menu",
  hint: null,
  searchFields: ["tabs", "text", "image"],
  filterFields: [],
  "@metadata": {
    "@collection": "Templates",
    "Raven-Clr-Type": "Wieldy.Core.Models.Template, Wieldy.Core",
  },
};

export default Articles;