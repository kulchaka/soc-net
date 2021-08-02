import React from "react";
import {connect} from "react-redux";
import {
  followThunk, getUserThunkCreator,
  setCurrentPage,
  toggleIsFollowing,
  unfollowThunk,
} from "../../redux/usersReducer";
import Users from "./Users";
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading";
import withAuthRedirect from "../../HOC/withAuthRedirect";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (currentPage) => {
    this.props.getUserThunkCreator(currentPage, this.props.pageSize)
    this.props.setCurrentPage(currentPage)
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
          unfollowThunk={this.props.unfollowThunk}
          followThunk={this.props.followThunk}
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

let withRedirect = withAuthRedirect(UsersContainer)


export default connect(mapStateToProps, {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  toggleIsFollowing,
  getUserThunkCreator
})(withRedirect)

