import React from 'react';
import Link from 'next/link';
import { Button, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import { PostEntry } from '../entities/Post';

type PostProps = PostEntry;

const Post: React.FC<PostProps> = (props) => (
  <Card>
    <CardTitle style={{height: '100px', background: `url(https://${props.fields.image.fields.file.url}) center / cover`}}>
    </CardTitle>
    <CardTitle style={{height: '70px'}}>
      {props.fields.title.substr(0, 15)}
    </CardTitle>
    <CardText style={{height: '100px', wordWrap: 'break-word'}}>
      {props.fields.content.substr(0, 100)}
    </CardText>
    <CardActions border>
      <Link href="post/[pid]" as={`/post/${props.fields.slug}`}>
        <Button colored>続きを読む</Button>
      </Link>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
  </Card>
);

export default Post;
