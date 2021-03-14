import post from './Post.module.css'

const Post = () => {
  return (
    <>
    <div className={post.post}>
      <img className={post.post__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4IJAoQQ7u15e7dKIkJ9xdaGRboA5Ycj2fg&usqp=CAU" alt="avatar"/>
      <h3 className={post.post__title}>Post</h3>
    </div>
    </>
  )
}

export default Post
