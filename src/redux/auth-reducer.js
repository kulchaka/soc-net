const SET_USER_DATA = 'SET_USER_DATA'

const initState = {
  id: null,
  email: null,
  login: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export const setUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: id, email, login})

export default authReducer