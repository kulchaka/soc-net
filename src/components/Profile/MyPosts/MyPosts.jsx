import React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements =
    props.posts.map(p => (
      <Post
        message={p.text}
        likesCount={p.likesCount}
        key={p.id}
      />
    ));

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }
  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
