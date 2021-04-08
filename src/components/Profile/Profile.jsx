import MyPost from "./MyPost/MyPost";

import s from './Profile.module.css'

import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = (props) => {
  return (
    <main className={s.mainBlock}>
      <ProfInfo textArea={props.textArea} dispatch={props.dispatch}/>
      <MyPost posts={props.posts} />
    </main>
  )
}

export default Profile;
