const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initState = {
  users: [
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      name: 'Dmitry',
      status: 'Sensei',
      id: 1,
      followed: false,
      location: {
        city: 'Minks',
        country: 'BY'
      }
    },
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      name: 'Kulchaka',
      status: 'student',
      id: 2,
      followed: true,
      location: {
        city: 'Lviv',
        country: 'UA'
      }
    },
    {
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
      name: 'Andrii',
      status: 'Junior',
      id: 3,
      followed: false,
      location: {
        city: 'Brno',
        country: 'CZ'
      }
    }
  ]
}

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}

          }
          return u
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followAC = (userId) => (
  {
    type: FOLLOW,
    userId
  }
)

export const unfollowAC = (userId) => (
  {
    type: UNFOLLOW,
    userId
  }
)
export const setUsersAC = (users) => (
  {
    type: SET_USERS,
    users
  }
)


export default usersReducer

