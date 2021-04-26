import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState().dialogsPage


          const onSendMsgClick = () => {
            store.dispatch(sendMessageCreator())
          }

          const onNewMSgChange = (body) => {
            store.dispatch(updateMessageBodyCreator(body))
          }
          return <Dialogs updateMessageBody={onNewMSgChange}
                          sendMessage={onSendMsgClick}
                          dialogsPage={state}
          />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
