import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import { Grid, Cell, Spinner } from 'react-mdl';
import { PostEntity } from '../entities/Post';
import { createMockClient } from '../__test__/api';

const Home: React.FC<{}> = () => {
  const [posts, setPosts] = useState<PostEntity[]>([]);

  useEffect(() => {
    createMockClient()
      .getPosts()
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <Grid>
      {posts.length == 0 ? (
        <Spinner style={{ margin: 'auto' }} />
      ) : (
        posts.map((post) => (
          <Cell key={post.id} col={4}>
            <Post {...post} />
          </Cell>
        ))
      )}
    </Grid>
  );
};

export default Home;
