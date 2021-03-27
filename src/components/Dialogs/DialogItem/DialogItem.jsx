import s from "./DialogItem.module.css";
import {Link} from "react-router-dom";

const DialogItem = ({id, name}) => {
  return (
    <div className={s.dialog__name}>
      <Link to={`/dialogs/${id}`} className={s.dialog__link}>{name}</Link>
    </div>
  )
}

export default DialogItem
