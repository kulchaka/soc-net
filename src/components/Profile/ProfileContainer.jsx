import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from 'react-router-dom'
import {usersAPI} from "../../API/API";

class ProfileContainer extends React.Component{

  componentDidMount() {

    let userID = this.props.match.params.userID

    if(!userID) {
      userID = 2
    }
    this.props.getUserProfileThunk(userID)
    // usersAPI.getProfile(userID)
    //   .then(response => {
    //     console.log(response)
    //     this.props.setUserProfileActionCreator(response.data)
    //   })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfileThunk})(WithUrlDataContainerComponent)

