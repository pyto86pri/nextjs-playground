import { Asset, Sys, Entry } from 'contentful';

export type PostEntry = Entry<PostField>;

export type PostField = {
  title: string
  content: string
  image: Asset
  createdAt: string
  updatedAt: string
  tags: string[]
};