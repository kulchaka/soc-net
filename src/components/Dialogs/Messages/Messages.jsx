import s from "./Messages.module.css";

const Messages = ({text}) => {
  return (
    <div className={s.messages__item}>{text}!</div>
  )
}

export default Messages
