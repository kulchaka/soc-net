import React from "react";
import s from "../Profile.module.css";

const ProfInfo = (props) => {

  const texAreaRef = React.createRef();

  const addPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  const updatePost = () => {
      props.dispatch({type: 'POST-UPDATE', text: texAreaRef.current.value})
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
      <textarea ref={texAreaRef} name="" id="" cols="30" rows="2" onChange={updatePost} value={props.textArea} />
      <button onClick={addPost}>ADD POST</button>
    </>
  )
}

export default ProfInfo
