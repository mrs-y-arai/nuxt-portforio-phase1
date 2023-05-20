import type { MicroCMSImage } from "microcms-js-sdk";

export interface Works {
  id: string;
  title: string;
  url: string;
  comment: string;
  thumbnail?: MicroCMSImage;
  role?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}
