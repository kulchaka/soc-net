import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserDataAC} from "../../redux/auth-reducer";
import {usersAPI} from "../../API/API";

class HeaderContainer extends React.Component {

  componentDidMount() {
    usersAPI.loginUser()
      .then(data => {
        if (data.resultCode === 0) {
          const {id, login, email} = data.data
          this.props.setUserDataAC(id, email, login)
        }
      })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)
