import {authMe} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA'

const initState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

//Action Creators
export const setUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})


//Thunk
export const loginThunk = () => (dispatch) => {
  authMe.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        const {id, login, email} = response.data.data
        dispatch(setUserDataAC(id, email, login))
      }
    })
}

export default authReducer
