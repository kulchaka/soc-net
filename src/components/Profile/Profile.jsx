import MyPost from "./MyPost/MyPost";

import s from './Profile.module.css'

import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = (props) => {
console.log((props))
  return (
    <main className={s.mainBlock}>
      <ProfInfo textArea={props.textArea} addPost={props.addPost}/>
      <MyPost posts={props.posts} />
    </main>
  )
}

export default Profile;
