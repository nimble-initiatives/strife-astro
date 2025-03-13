import type { Content, Chapter } from '@strifeapp/types';

export type Home = Content & {
  sections: Chapter[]
}