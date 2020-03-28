import { ContentfulClientApi } from 'contentful';
import { ContentfulClient } from '@api';
import { PostEntity } from '../../entities/Post';
import { sleep } from '../util';

/**
 *
 */
class MockContentfulClientImpl implements ContentfulClient {
  /**
   *
   */
  async getPosts(): Promise<PostEntity[]> {
    await sleep(1000);
    return Array.from(Array(20).keys()).map((i) => ({
      id: i.toString(),
      title: `${i}title`,
      content: `${i}content`,
    }));
  }
}

export const createMockClient = (): ContentfulClient =>
  new MockContentfulClientImpl();
