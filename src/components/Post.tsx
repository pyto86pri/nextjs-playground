import React from 'react';
import { Button, Card, CardTitle, CardText, CardActions, CardMenu, IconButton } from 'react-mdl';
import { PostEntity } from '../entities/Post';

type PostProps = PostEntity;

const Post: React.FC<PostProps> = (props) => (
  <Card>
    <CardTitle style={{height: '100px', background: "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"}}>
      {props.title.substr(0, 15)}
    </CardTitle>
    <CardText style={{height: '176px', wordWrap: 'break-word'}}>
      {props.summary}
    </CardText>
    <CardActions border>
      <Button colored>続きを読む</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
  </Card>
);

export default Post;
