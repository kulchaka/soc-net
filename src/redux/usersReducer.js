const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL = 'SET_TOTAL'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

const initState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [17677]
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
        ...state, users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL:
      return {
        ...state, totalUserCount: action.totalUserCount
      }
    case TOGGLE_FETCHING:
      return {
        ...state, isFetching: action.isFetching
      }
      case TOGGLE_FOLLOWING:
      return {
        ...state,
        followingInProgress: action.isFetching
      }
    default:
      return state;
  }
}

//Action Creators
export const follow = (userId) => (
  {
    type: FOLLOW,
    userId
  }
)

export const unfollow = (userId) => (
  {
    type: UNFOLLOW,
    userId
  }
)
export const setUsers = (users) => (
  {
    type: SET_USERS,
    users
  }
)
export const setCurrentPage = (currentPage) => (
  {
    type: SET_CURRENT_PAGE,
    currentPage
  }
)
export const setTotalCount = (totalCount) => (
  {
    type: SET_TOTAL,
    totalUserCount: totalCount
  }
)
export const toggleIsFetching = (isFetching) => (
  {
    type: TOGGLE_FETCHING,
    isFetching: isFetching
  }
)
export const toggleIsFollowing = (isFetching) => (
  {
    type: TOGGLE_FOLLOWING,
    isFetching: isFetching
  }
)


export default usersReducer

