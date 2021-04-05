import MyPost from "./MyPost/MyPost";

import s from './Profile.module.css'

import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = (props) => {
  return (
    <main className={s.mainBlock}>
      <ProfInfo textArea={props.textArea} postChange = {props.postChange} addPost={props.addPost}/>
      <MyPost posts={props.posts} />
    </main>
  )
}

export default Profile;
