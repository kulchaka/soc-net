import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userLogo from '../../assets/img/logo.png'


class Users extends React.Component {

  getUsers = () => {
    if (this.props.users.length === 0) {

      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          console.log(response.data.items)
          this.props.setUsers(response.data.items)
        })
    }
  }

  render() {
    return <>
      <button onClick={this.getUsers}>Get State</button>
      {
        this.props.users.map(u =>
          <div key={u.id} className={s.block}>
            <div className={s.block__logo}>
              <img src={u.photos.small != null ? u.photos.small : userLogo} alt="logo" className={s.logo}/>
              {
                u.followed
                  ? <button className={s.button} onClick={() => {
                    this.props.unfollow(u.id)
                  }}>UNFOLLOW</button>
                  : <button className={s.button} onClick={() => {
                    this.props.follow(u.id)
                  }}>FOLLOW</button>
              }
            </div>
            <div className={s.block__info}>
              <div className={s.block__name}>
                <p className={s.name}>{u.name}</p>
                <p className={s.status}>{u.status}</p>
              </div>
              <div className={s.block__location}>
                <p className={s.country}>{'u.location.country'}</p>
                <p className={s.city}>{'u.location.city'}</p>
              </div>
            </div>
          </div>)
      }
    </>
  }
}

export default Users
