/// <reference types="astro/client" />

declare module 'strife:store' {
  export const store: IDocumentStore;
}

declare module '@strifeapp/strife' {
  export const subscribe: (callback: (content: any) => void) => void;
}