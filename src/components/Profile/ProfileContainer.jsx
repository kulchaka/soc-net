import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component{

  componentDidMount() {
    debugger
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => {
        this.props.setUserProfileActionCreator(response.data)
      })
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfileActionCreator})(WithUrlDataContainerComponent)

