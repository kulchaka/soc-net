import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.post__img} alt='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4IJAoQQ7u15e7dKIkJ9xdaGRboA5Ycj2fg&usqp=CAU' />
      <h3 className={s.post__title}>{props.message ? props.message : 'POST'}</h3>
      <div>
        <span>Likes: {props.likesCount ? props.likesCount : '0'}</span>
      </div>
    </div>
  )
}

export default Post;
