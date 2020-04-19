import React, { useEffect, useState, useRef } from 'react';
import Post from '../components/Post';
import { Grid, Cell, Spinner, Textfield } from 'react-mdl';
import { PostEntry } from '../entities/Post';
import { createClient } from '../api';
import { useDebouncedCallback } from 'use-debounce';

const Home: React.FC<{}> = () => {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostEntry[]>([]);
  const [query, setQuery] = useState<string>("");
  const [debouncedCallback] = useDebouncedCallback((query: string) => setQuery(query), 1000);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const posts = await createClient().searchPosts(query);
      setPosts(posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, [query]);

  return (
    <>
      <Textfield
        onChange={(e) => debouncedCallback((e.target as HTMLInputElement).value)}
        label="検索"
        floatingLabel
        expandable
        expandableIcon="search"
      />
      <div>
        {query ? `「${query}」の検索結果` : "" }
      </div>
      <Grid>
        {isFetching ? (
           <Spinner style={{ margin: 'auto' }} />
        ) : (
          posts.map((post) => (
            <Cell key={post.fields.slug} col={4}>
              <Post {...post} />
            </Cell>
          ))
        )}
      </Grid>
    </>
  );
};

export default Home;
