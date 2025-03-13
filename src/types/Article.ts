import type { Content, Chapter, ImageGroup } from '@strifeapp/types';

export type Article = Content & {
  heading?: string | null,
  text?: string | null,
  image?: ImageGroup | null,
  sections?: Chapter[] | null,
}