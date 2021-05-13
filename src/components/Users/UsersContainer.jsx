import React from "react";
import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  toggleIsFetchingAC,
  unfollowAC
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount > 200 ? 199 : response.data.totalCount)
      })
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
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
  }
}


export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC
})(UsersContainer)

