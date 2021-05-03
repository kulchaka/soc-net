import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userLogo from '../../assets/img/logo.png'

const Users = (props) => {
  // console.log(props)
  if(props.users.length === 0) {

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        console.log(response.data.items)
        props.setUsers(response.data.items)
      })

    // props.setUsers(
    //   [
    //     {
    //       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
    //       name: 'Dmitry',
    //       status: 'Sensei',
    //       id: 1,
    //       followed: false,
    //       location: {
    //         city: 'Minks',
    //         country: 'BY'
    //       }
    //     },
    //     {
    //       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
    //       name: 'Kulchaka',
    //       status: 'student',
    //       id: 2,
    //       followed: true,
    //       location: {
    //         city: 'Lviv',
    //         country: 'UA'
    //       }
    //     },
    //     {
    //       logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg',
    //       name: 'Andrii',
    //       status: 'Junior',
    //       id: 3,
    //       followed: false,
    //       location: {
    //         city: 'Brno',
    //         country: 'CZ'
    //       }
    //     }
    //   ]
    // )
  }
  return (
    props.users.map(u =>
      <div key={u.id} className={s.block}>
        <div className={s.block__logo}>
          <img src={u.photos.small != null ? u.photos.small : userLogo} alt="logo" className={s.logo}/>
            {
              u.followed
                ? <button className={s.button} onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                : <button className={s.button} onClick={() => {props.follow(u.id)}}>FOLLOW</button>
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
  )
}

export default Users
