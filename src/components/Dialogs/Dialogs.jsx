import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/dialogsReducer";
// import {Route} from "react-router-dom";

const Dialogs = (props) => {
  // console.log(props)
  const dialogsEl = props.dialogData.dialogsData.map(({id, name}) => (
    <DialogItem
      id={id}
      name={name}
      key={id}
    />
  ))

  const messagesEl = props.dialogData.messagesData.map(({id, message}) => (
    <Messages
      text={message}
      key={id}
    />
  ))

  const newMsg = props.dialogData.newMessageText


  const onSendMsgClick = () => {
  props.dispatch(sendMessageCreator())
  }

  const onNewMSgChange = (event) => {
    props.dispatch(updateMessageBodyCreator(event.target.value))
  }

  return (
    <>
      <h1>Dialogs</h1>
      <div className={s.dialogs}>
        <div className={s.dialog__items}>
          { dialogsEl }
        </div>
        <div className={s.messages}>
          <div>{ messagesEl }</div>

          <div>
            <div><textarea
              value={newMsg}
              onChange={onNewMSgChange}
              placeholder="Enter your message"></textarea></div>
            <div><button onClick={ onSendMsgClick }>Send</button></div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dialogs
