/// <reference path="../.astro/types.d.ts" />
import { Label, OriginReference } from '@strifeapp/types';

declare global {
  namespace App {
    interface Locals {
      editMode: boolean;
      pageData: {
        id: string;
        displayName: string;
        url: string;
        origin: OriginReference;
        collection: string;
        publishedDate: string;
        createdAt: string;
        labels: Label[];
        deleted: boolean;
      };
    }
  }
}


