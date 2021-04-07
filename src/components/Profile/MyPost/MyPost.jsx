import Post from "./Post/Post";


const MyPost = (props) => {
  return (
    <>
      <div>
        {
          props.posts.map(({id, text, likesCount}) => (
            <Post
              text={text}
              likesCount={likesCount}
              key={id}
            />
            ))
        }
      </div>
    </>
  )
}

export default MyPost;
