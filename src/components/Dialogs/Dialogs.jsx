import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

  const state = props.dialogsPage


  const dialogsEl = state.dialogsData.map(({id, name}) => (
    <DialogItem
      id={id}
      name={name}
      key={id}
    />
  ))

  const messagesEl = state.messagesData.map(({id, message}) => (
    <Messages
      text={message}
      key={id}
    />
  ))

  const newMsg = state.newMessageText


  const onSendMsgClick = () => {
    props.sendMessage()
  }

  const onNewMSgChange = (event) => {
    const body = event.target.value
    props.updateMessageBody(body)
  }

  return (
    <>
      <h1>Dialogs</h1>
      <div className={s.dialogs}>
        <div className={s.dialog__items}>
          {dialogsEl}
        </div>
        <div className={s.messages}>
          <div>{messagesEl}</div>

          <div>
            <div><textarea
              value={newMsg}
              onChange={onNewMSgChange}
              placeholder="Enter your message"></textarea></div>
            <div>
              <button onClick={onSendMsgClick}>Send</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dialogs
