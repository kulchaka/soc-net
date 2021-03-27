import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {

  const dialogsData = [
    {
      id: '01',
      name: 'John'
    },
    {
      id: '02',
      name: "Andrii"
    },
    {
      id: '03',
      name: "Peter"
    }
  ];

  const messagesData = [
    {
      id: '01',
      message: 'Hello'
    },
    {
      id: '02',
      message: "How are you?!"
    },
    {
      id: '03',
      message: "Yo!"
    }
  ];


  return (
    <>
      <h1>Dialogs</h1>
      <div className={s.dialogs}>
        <div className={s.dialog__items}>
          {
            dialogsData.map(({id, name}) => (
              <DialogItem
                id={id}
                name={name}
                key={id}
              />
              ))
          }
        </div>
        <div className={s.messages}>
          {
            messagesData.map(({id, message}) => (
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
