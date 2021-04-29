const ADD_POST = 'ADD-POST';
const POST_UPDATE = 'POST-UPDATE';

const initState = {
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

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: '04',
        text: state.textArea,
        likesCount: '0'
      }
      const stateCopy = { ...state }
      stateCopy.postsData = [ ...state.postsData ]
      stateCopy.postsData.push(newPost)
      stateCopy.textArea = ''
      return stateCopy;
    }
    case POST_UPDATE: {
      const stateCopy = {...state}
      stateCopy.textArea = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: POST_UPDATE,
    newText: text
  }
);

export default profileReducer;
