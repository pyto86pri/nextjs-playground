import React from 'react';
import Post from '../components/Post';
import { Grid, Cell } from 'react-mdl';
import { PostEntity } from '../entities/Post';

const Home: React.FC<{}> = () => {
  const posts: PostEntity[] = Array.from(Array(10).keys()).map((i) => {
    return {
      id: i.toString(),
      title: `title${i}`,
      content: `content${i}`,
    };
  });
  return (
    <Grid>
      {posts.map((post) => (
        <Cell key={post.id} col={4}>
          <Post {...post} />
        </Cell>
      ))}
    </Grid>
  );
};

export default Home;
