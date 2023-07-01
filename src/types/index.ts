import type { MicroCMSImage } from "microcms-js-sdk";

export type Works = {
  id: string;
  title: string;
  URL: string;
  comment: string;
  thumbnail?: MicroCMSImage;
  role?: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
