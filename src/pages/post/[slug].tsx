import React, { useEffect, useState, useCallback } from 'react';
import { createClient } from '../../api';
import { PostEntry } from '../../entities/Post';
import { Spinner } from 'react-mdl';
import marked from 'marked';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Error from 'next/error';

type PostProps = Readonly<{
  post: PostEntry | null
}>;

const Post: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();
  const htmlContentCallback = useCallback((): {__html: string} => ({
    __html: post ? marked(post.fields.content): ""
  }), [post]);

  return (
    <>
      {router.isFallback ? (
        <Spinner style={{ margin: 'auto' }} />
      ) : (
        post ? (
          <>
            <p style={{color: 'gray'}}>
              {post.fields.createdAt}
            </p>
            <img src={`https://${post.fields.image.fields.file.url}`} />
            <h1>
              <strong>{post.fields.title}</strong>
            </h1>
            {post.fields.tags?.forEach((tag) =>
              <p>{tag}</p>
            )}
            <hr/>
            <div dangerouslySetInnerHTML={htmlContentCallback()} />
          </>
        ) : (
          <Error statusCode={404} />
        )
      )
      }
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await createClient().getPosts();
  const paths = posts.map(post => ({
    params: { slug: post.fields.slug }
  }));
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug;
  const post = slug ?
    await createClient().getPost(slug as string)
      .catch(() => null)
    : null;
  return { props: { post } }
}

export default Post;