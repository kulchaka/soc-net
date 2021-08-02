import {usersAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const POST_UPDATE = 'POST-UPDATE';
const SET_PROFILE = 'SET-PROFILE';

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
  textArea: 'enter text',
  profile: null
}

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: '04',
        text: state.textArea,
        likesCount: '0'
      }
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        textArea: ''
      }
    case POST_UPDATE:
      return {
        ...state,
        textArea: action.newText
      }
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}

//Action Creators
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: POST_UPDATE,
    newText: text
  }
);
export const setUserProfileActionCreator = (profile) => ({type: SET_PROFILE, profile});

// Thunk
export const getUserProfileThunk = (userID) => (dispatch) => {
  return usersAPI.getProfile(userID)
    .then(response => {
      dispatch(setUserProfileActionCreator(response.data))
    })
}

export default profileReducer;
