import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userLogo from '../../assets/img/logo.png'


class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        // console.log(response, 'response')
        this.props.setUsers(response.data.items)
        // this.props.setTotalCount(response.data.totalCount)
      })
  }

  render() {

    const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    const pagesArr = []
    for (let i = 1; i <= pagesCount; i++) {
      pagesArr.push(i)
    }

    console.log(pagesArr)

    console.log(this.props, 'PROPS USERS')
    return <>
      <div className={s.pages}>
        <>
          {
            pagesArr.map(e => {
              return <span className={this.props.currentPage == e ? `${s.numpages_selected}` : `${s.numpages}` } key={e}> {e} </span>
            })
          }
        </>
      </div>
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
      <div className={s.pages}>
        <>
          {
            pagesArr.map(e => {
              return <span className={this.props.currentPage == e ? `${s.numpages_selected}` : `${s.numpages}` } key={e}> {e} </span>
            })
          }
        </>
      </div>
    </>
  }
}

export default Users
