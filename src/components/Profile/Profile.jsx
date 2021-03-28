import MyPost from "./MyPost/MyPost";

import s from './Profile.module.css'
import ProfInfo from "./ProfInfo/ProfInfo";

const Profile = (props) => {

  return (
    <main className={s.mainBlock}>
      <ProfInfo/>
      <MyPost posts={props.posts} />
    </main>
  )
}

export default Profile;
