import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
  return (
    <div className={s.dialog__name}>
      <NavLink to={`/dialogs/${id}`} className={s.dialog__link}>{name}</NavLink>
    </div>
  )
}

export default DialogItem
