import { Asset, Sys, Entry } from 'contentful';

export type PostEntry = Entry<PostField>;

export type PostField = {
  slug: string,
  title: string
  content: string
  image: Asset
  createdAt: string
  updatedAt: string
  tags: string[]
};