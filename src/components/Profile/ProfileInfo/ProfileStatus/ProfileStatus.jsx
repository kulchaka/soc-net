import {Component} from "react";

class ProfileStatus extends Component {

  state = {
    editMode: false
  }

  activateMode = () => {
    // this.state.editMode = true
    // this.forceUpdate()
    this.setState({
      editMode: true
    })
  }

  deactivateMode = () => {
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
            <span onDoubleClick={this.activateMode}>{this.props.status}</span>
          </div>
        }
        {
          this.state.editMode &&
          <div>
            <span>
              <input autoFocus={true} onBlur={this.deactivateMode} type="text" value={this.props.status}/>
            </span>
          </div>
        }
      </>
    )
  }
}


export default ProfileStatus;

