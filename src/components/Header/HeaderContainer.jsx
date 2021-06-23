import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {loginThunk, setUserDataAC} from "../../redux/auth-reducer";
import {authMe} from "../../API/API";

class HeaderContainer extends React.Component {

  componentDidMount() {

    this.props.loginThunk()
    // authMe.me()
    //   .then(response => {
    //     if (response.data.resultCode === 0) {
    //       const {id, login, email} = response.data.data
    //       this.props.setUserDataAC(id, email, login)
    //     }
    //   })
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, {loginThunk})(HeaderContainer)
