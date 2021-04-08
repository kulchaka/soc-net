import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";
// import {Route} from "react-router-dom";

const Dialogs = (props) => {

  return (
    <>
      <h1>Dialogs</h1>
      <div className={s.dialogs}>
        <div className={s.dialog__items}>
          {
            props.dialog.map(({id, name}) => (
              <DialogItem
                id={id}
                name={name}
                key={id}
              />
              ))
          }
        </div>
        <div className={s.messages}>
          {/*<Route path='/dialogs/01'>*/}
          {/*  {*/}

          {/*      <Messages*/}
          {/*        text={props.msgs[0].message}*/}
          {/*      />*/}

          {/*  }*/}
          {/*</Route>*/}

          {
            props.msgs.map(({id, message}) => (
              <Messages
                text={message}
                key={id}
              />
                ))
          }
        </div>
      </div>
    </>
  )
}

export default Dialogs
