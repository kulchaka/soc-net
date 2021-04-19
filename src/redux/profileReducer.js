const ADD_POST = 'ADD-POST';
const POST_UPDATE = 'POST-UPDATE';
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: POST_UPDATE,
    newText: text
  }
);

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: '04',
        text: state.textArea,
        likesCount: '0'
      }
      state.postsData.push(newPost)
      state.textArea = ''
      return state;
    case POST_UPDATE:
      state.textArea = action.newText;
      return state;
    default:
      return state;
  }
}

export default profileReducer;
