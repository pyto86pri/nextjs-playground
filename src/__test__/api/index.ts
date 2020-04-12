import { ContentfulClientApi, Entry, Asset, Sys } from 'contentful';
import { ContentfulClient } from '@api';
import { PostField, PostEntry } from '../../entities/Post';
import { sleep, getRandomInteger } from '../util';

const mockSys = (i :number): Sys => ({
  id: i.toString(),
  contentType: {
    sys: {
      type: 'Link',
      linkType: 'ContentType',
      id: 'dummy'
    }
  },
  type: 'dummy',
  createdAt: '2020-04-11T12:30+09:00',
  updatedAt: '2020-04-11T12:30+09:00',
  locale: 'ja'
});

const mockAsset = (i: number): Asset => ({
  sys: mockSys(i),
  fields: {
    title: 'vuefes',
    description: 'Vue Fes Japan 2018',
    file: {
      contentType: 'image/jpeg',
      details: {
        size: 100,
      },
      fileName: 'vuefes.jpg',
      url: '//images.ctfassets.net/2p1otbbee5vt/1IT8b2qoAEyc0SOwqSy6QS/f5f517ed6f292497270bf3b85d608dea/vuefes.jpg'
    }
  },
  toPlainObject(): any {}
});

const mockPostField = (i: number): PostField => ({
  title: `${i}title`.repeat(getRandomInteger(10)),
  content: `${i}content`.repeat(getRandomInteger(1000)),
  image: mockAsset(i),
  createdAt: '2020-04-11T12:30+09:00',
  updatedAt: '2020-04-11T12:30+09:00',
  tags: ['Dummy1', 'Dummy2']
});


class MockContentfulClientImpl implements ContentfulClient {
  async getPosts(): Promise<PostEntry[]> {
    await sleep(1000);
    return Array.from(Array(20).keys()).map((i) => ({
      sys: mockSys(i),
      fields: mockPostField(i),
      update(): any {},
      toPlainObject(): any {}
    }));
  }
}

export const createMockClient = (): ContentfulClient =>
  new MockContentfulClientImpl();
