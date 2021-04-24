import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

  const state = props.store.getState().dialogsPage


  const onSendMsgClick = () => {
  props.store.dispatch(sendMessageCreator())
  }

  const onNewMSgChange = (body) => {
    props.store.dispatch(updateMessageBodyCreator(body))
  }

  return (
    <Dialogs
      updateMessageBody={onNewMSgChange}
      sendMessage={onSendMsgClick}
      dialogsPage={state}
    />
  )
}

export default DialogsContainer
