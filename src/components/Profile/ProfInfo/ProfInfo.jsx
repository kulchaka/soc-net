import s from "../Profile.module.css";

const ProfInfo = () => {

  const alertPostBtn = () => {
    alert('Alert Post')
  }

  return (
    <>
      <div>
        <img
          className={s.prof__img}
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt=""/>
      </div>
      <div>
        ava + dcrp
      </div>
      <h3>My post</h3>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <button onClick={alertPostBtn}>ADD POST</button>
    </>
  )
}

export default ProfInfo
