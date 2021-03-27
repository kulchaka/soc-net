import MyPost from "./MyPost/MyPost";

import s from './Profile.module.css'

const Profile = () => {
  return (
    <main className={s.mainBlock}>
      <div>
        <img
          className={s.prof__img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""/>
      </div>
      <div>
        ava + dcrp
      </div>
      <MyPost />
    </main>
  )
}

export default Profile;
