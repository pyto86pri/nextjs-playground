import React from 'react';
import { Card, CardTitle, CardText } from 'react-mdl';
import { PostEntity } from '../entities/Post';

type PostProps = PostEntity;

const Post: React.FC<PostProps> = (props) => (
  <Card>
    <CardTitle>{props.title}</CardTitle>
    <CardText>{props.content}</CardText>
  </Card>
);

export default Post;
