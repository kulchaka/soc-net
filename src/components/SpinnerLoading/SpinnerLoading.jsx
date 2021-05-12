import React from "react";
import s from "./SpinnerLoading.module.css"
import spinner from "./../../assets/img/spinnerLoad.svg"

const SpinnerLoading = () => {
  return <img className={s.spinner__img} src={spinner} alt="spinner"/>
}

export default SpinnerLoading
