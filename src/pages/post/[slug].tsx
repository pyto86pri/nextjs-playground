import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '../../api';
import { PostEntry } from '../../entities/Post';
import { Spinner } from 'react-mdl';
import marked from 'marked';

const Post: React.FC<{}> = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  const [post, setPost] = useState<PostEntry>();
  const htmlContentCallback = useCallback((): {__html: string} => ({
    __html: post ? marked(post.fields.content): ""
  }), [post]);

  useEffect(() => {
    const fetchPost = async () => {
      const post = await createClient().getPost(slug);
      setPost(post);
    }

    fetchPost();
  }, []);

  return (
    <>
      {post ? (
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
        <Spinner style={{ margin: 'auto' }} />
      )
      }
    </>
  )
};

export default Post;