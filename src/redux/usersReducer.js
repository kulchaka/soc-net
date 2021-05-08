const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
// const SET_TOTAL = 'SET_TOTAL'

const initState = {
  users: [],
  pageSize: 4,
  totalUserCount: 21,
  currentPage: 2
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
    // case SET_TOTAL:
    //   return {
    //     ...state, totalCount: action.total
    //   }
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
// export const setTotalCount = (totalCount) => (
//   {
//     type: SET_TOTAL,
//     total: totalCount
//   }
// )


export default usersReducer

