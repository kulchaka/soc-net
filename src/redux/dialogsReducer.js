const MESSAGE_UPDATE = 'MESSAGE_UPDATE';
const ADD_MESSAGE = 'ADD_MESSAGE';

const initState  = {
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
};

const dialogsReducer = (state = initState, action) => {
  switch (action.type) {
    case MESSAGE_UPDATE:
      state.newMessageText = action.body;
      return state
    case ADD_MESSAGE:
      const msg = state.newMessageText
      state.dialogsData.push({id: '04', name: 'Valera'})
      state.messagesData.push({id: '04', message: msg})
      state.newMessageText = ''
      return state
    default:
      return state

      return state;
  }
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageBodyCreator = (text) => ({
    type: MESSAGE_UPDATE,
    body: text
  }
);

export default dialogsReducer;
