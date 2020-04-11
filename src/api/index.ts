import {
  ContentfulClientApi,
  CreateClientParams,
  createClient as createContentfulClient,
} from 'contentful';
import { PostEntity } from '../entities/Post';

export interface ContentfulClient {
  getPosts(): Promise<PostEntity[]>;
}

/**
 *
 */
class ContentfulClientImpl implements ContentfulClient {
  constructor(private client: ContentfulClientApi) {}

  /**
   *
   */
  async getPosts(): Promise<PostEntity[]> {
    const posts = await this.client.getEntries<PostEntity>({});
    return posts.items.map((_) => _.fields);
  }
}

const config: CreateClientParams = {
  space: process.env.SPACE_ID as string,
  accessToken: process.env.ACCESS_TOKEN as string,
};

const client = createContentfulClient(config);

export const createClient = (): ContentfulClient =>
  new ContentfulClientImpl(client);
