import { ContentfulClientApi } from 'contentful';
import { ContentfulClient } from '@api';
import { PostEntity } from '../../entities/Post';
import { sleep, getRandomInteger } from '../util';

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
      slug: 'dummy',
      id: i.toString(),
      title: `${i}title`.repeat(getRandomInteger(10)),
      summary: 'summary'.repeat(getRandomInteger(100)),
      content: `${i}content`.repeat(getRandomInteger(1000)),
      isPublished: true,
      publishedAt: '2018-11-09T12:30+09:00',
      tags: ['Dummy1', 'Dummy2']
    }));
  }
}

export const createMockClient = (): ContentfulClient =>
  new MockContentfulClientImpl();
