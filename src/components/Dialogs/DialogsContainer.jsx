import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    updateMessageBody: (body) => {
      dispatch(updateMessageBodyCreator(body))
    }
  }
}

//HOC
// const AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
