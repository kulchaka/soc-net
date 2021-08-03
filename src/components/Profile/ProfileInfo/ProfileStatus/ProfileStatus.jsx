import {Component} from "react";

class ProfileStatus extends Component {

  state = {
    editMode: false
  }

  activateMode() {
    // this.state.editMode = true
    // this.forceUpdate()
    this.setState({
      editMode: true
    })
  }

  deactivateMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <>
        {
          !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>
          </div>
        }
        {
          this.state.editMode &&
          <div>
            <span>
              <input onBlur={this.deactivateMode.bind(this)} type="text" value={this.props.status}/>
            </span>
          </div>
        }
      </>
    )
  }
}


export default ProfileStatus;

