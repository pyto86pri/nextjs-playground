import {
  ContentfulClientApi,
  CreateClientParams,
  createClient as createContentfulClient,
} from 'contentful';
import { PostField, PostEntry } from '../entities/Post';
import { sleep } from '../__test__/util';

export interface ContentfulClient {
  getPost(slug: string): Promise<PostEntry>;
  getPosts(): Promise<PostEntry[]>;
  searchPosts(query: string): Promise<PostEntry[]>;
}

enum ContentType {
  POST = 'post'
}

class ContentfulClientImpl implements ContentfulClient {
  constructor(private client: ContentfulClientApi) {}

  async getPost(slug: string): Promise<PostEntry> {
    const posts = await this.client.getEntries<PostField>({
      content_type: ContentType.POST,
      'fields.slug': slug
    });
    console.log(posts);
    if (posts.items.length == 0) {
      // TODO
      throw Error();
    }
    return posts.items[0];
  }

  async getPosts(): Promise<PostEntry[]> {
    const posts = await this.client.getEntries<PostField>({
      content_type: ContentType.POST,
      order: '-fields.updatedAt'
    });
    console.log(posts);
    return posts.items;
  }

  async searchPosts(query: string): Promise<PostEntry[]> {
    const posts = await this.client.getEntries<PostField>({
      query
    });
    console.log(posts);
    return posts.items;
  }
}

const config: CreateClientParams = {
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
};

const client = createContentfulClient(config);

export const createClient = (): ContentfulClient =>
  new ContentfulClientImpl(client);
