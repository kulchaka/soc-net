import React from "react";
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalCount,
  setUsers,
  toggleIsFetching,
  unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import {usersAPI} from "../../API/API";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalCount(data.totalCount > 200 ? 199 : data.totalCount)
      })
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
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching
})(UsersContainer)

