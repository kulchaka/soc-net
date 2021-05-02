import React from "react";
import s from './Users.module.css'

const Users = (props) => {
  console.log(props)
  return (
    props.users.map(u =>
      <div key={u.id} className={s.block}>
        <div className={s.block__logo}>
          <img src={u.logoUrl} alt="logo" className={s.logo}/>
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
            <p className={s.country}>{u.location.country}</p>
            <p className={s.city}>{u.location.city}</p>
          </div>
        </div>
      </div>)
  )
}

export default Users
