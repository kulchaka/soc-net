import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCount, setUsersAC, unfollowAC} from "../../redux/usersReducer";

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
    // setTotalCount: (totalCount) => {
    //   dispatch(setTotalCount(totalCount))
    // }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
