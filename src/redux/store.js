//store - OOP
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

const ADD_POST = 'ADD-POST';
const POST_UPDATE = 'POST-UPDATE';
const MESSAGE_UPDATE = 'MESSAGE_UPDATE';
const ADD_MESSAGE = 'ADD_MESSAGE';

let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
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
      ],
      messagesData: [
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
      ],
      newMessageText: ''
    },
    profilePage: {
      postsData: [
        {
          id: '01',
          text: 'Hello, how are you?',
          likesCount: '2'
        },
        {
          id: '02',
          text: "Hi, this is my first POST ))",
          likesCount: '5'
        },
        {
          id: '03',
          text: "Bye!"
        }
      ],
      textArea: 'enter text'
    }

  },
  _callSubscriber() {
    console.log('state chg')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

export default store;
window.store = store
