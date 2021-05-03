import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.prof__img}
          alt='background'
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
      </div>
      <div >
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
