import post from './Post.module.css'

const Post = (props) => {
  return (
    <>
    <div className={post.post}>
      <img className={post.post__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4IJAoQQ7u15e7dKIkJ9xdaGRboA5Ycj2fg&usqp=CAU" alt="avatar"/>
      <h3 className={post.post__title}>{props.message ? props.message : 'POST'}</h3>
    </div>
      <div>
        <span>Likes: {props.likes ? props.likes : '0'}</span>
      </div>
    </>
  )
}

export default Post
