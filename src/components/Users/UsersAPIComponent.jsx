import React from "react";
import Users from "./Users";
import * as axios from "axios";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalCount(response.data.totalCount > 200 ? 199 : response.data.totalCount)
      })
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return <Users
      totalUserCount={this.props.totalUserCount}
      pageSize={this.props.pageSize}
      currentPage={this.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
    />
  }
}

export default UsersAPIComponent
