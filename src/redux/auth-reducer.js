import {usersAPI} from "../API/API";
import {toggleIsFollowing, unfollow} from "./usersReducer";

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

export const setUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})



export const loginThunk = (dispatch) => {
    usersAPI.loginUser()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data
          dispatch(setUserDataAC(id, email, login))
        }
      })
}

export default authReducer
