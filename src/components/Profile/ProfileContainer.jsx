import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../redux/profileReducer";
import {withRouter} from 'react-router-dom'
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userID = this.props.match.params.userID

    if (!userID) {
      userID = 2
    }
    this.props.getUserProfileThunk(userID)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

export default compose(
  connect(mapStateToProps, {getUserProfileThunk}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

