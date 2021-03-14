import mypost from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <>
      <div>
        <h3>My post</h3>
        <textarea name="" id="" cols="30" rows="2"></textarea>
        <button>ADD POST</button>
      </div>
      <div>
        <Post/>
        <Post/>
      </div>
    </>
  )
}

export default MyPost;
