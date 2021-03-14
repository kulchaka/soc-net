import prof from './Profile.module.css'

const Profile = () => {
  return (
    <main className={prof.content}>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""/>
      </div>
      <div>
        ava + dcrp
      </div>
      <div>
        My post
        <div>
          New post
        </div>
      </div>
      <div>
        <div>
          Post-1
        </div>
        <div>
          Post-2
        </div>
      </div>
    </main>
  )
}

export default Profile;
