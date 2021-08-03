import s from './ProfileInfo.module.css'
import SpinnerLoading from "../../SpinnerLoading/SpinnerLoading";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <SpinnerLoading/>
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img*/}
      {/*    className={s.prof__img}*/}
      {/*    alt='background'*/}
      {/*    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>*/}
      {/*</div>*/}
      <div>
        {<img src={props.profile.photos.large} alt="pic"/>}
        <ProfileStatus status={"Hello, I'm Status"} />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
      </div>
    </div>
  )
}

export default ProfileInfo;

