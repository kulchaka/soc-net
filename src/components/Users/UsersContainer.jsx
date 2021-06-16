import React from "react";
import {connect} from "react-redux";
import {
  follow, getUserThunkCreator,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching, toggleIsFollowing,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import {usersAPI} from "../../API/API";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <SpinnerLoading/> : null}
        <Users
          isLoader={this.props.isFetching}
          totalUserCount={this.props.totalUserCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          toggleIsFollowing={this.props.toggleIsFollowing}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
    ,
    pageSize: state.usersPage.pageSize
    ,
    totalUserCount: state.usersPage.totalUserCount
    ,
    currentPage: state.usersPage.currentPage
    ,
    isFetching: state.usersPage.isFetching
    ,
    followingInProgress: state.usersPage.followingInProgress
  }
}


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
  toggleIsFollowing,
  getUserThunkCreator
})(UsersContainer)

