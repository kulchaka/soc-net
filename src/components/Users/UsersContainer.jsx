import UsersAPIComponent from "./UsersAPIComponent";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  unfollowAC
} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (usersId) => {
      dispatch(followAC(usersId))
    },
    unfollow: (usersId) => {
      dispatch(unfollowAC(usersId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer
