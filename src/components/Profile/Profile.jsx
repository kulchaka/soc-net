import MyPost from "./MyPost/MyPost";

import prof from './Profile.module.css'

const Profile = () => {
  return (
    <main>
      <div>
        <img
          className={prof.prof__img}
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
