const MESSAGE_UPDATE = 'MESSAGE_UPDATE';
const ADD_MESSAGE = 'ADD_MESSAGE';

export const sendMessageCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageBodyCreator = (text) => ({
    type: MESSAGE_UPDATE,
    body: text
  }
);

const dialogsReducer = (state, action) => {
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

export default dialogsReducer;
