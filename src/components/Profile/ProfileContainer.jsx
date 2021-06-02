import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from 'react-router-dom'

class ProfileContainer extends React.Component{

  componentDidMount() {
    console.log(this.props.match.params.userID)

    const userID = this.props.match.params.userID

    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
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

