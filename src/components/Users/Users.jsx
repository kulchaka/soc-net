import React from "react";
import userLogo from '../../assets/img/logo.png'
import s from './Users.module.css'


const Users = (props) => {
  console.log(props)
  const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
  const pagesArr = []
  for (let i = 1; i <= pagesCount; i++) {
    pagesArr.push(i)
  }

  return (
    <>
      <div className={s.pages}>
        <>
          {
            pagesArr.map(e => {
              return <span
                className={props.currentPage === e ? `${s.numpages_selected}` : `${s.numpages}`} key={e}
                onClick={() => {
                  props.onPageChanged(e)
                }}
              >
                {e}
              </span>
            })
          }
        </>
      </div>
      {
        props.users.map(u =>
          <div key={u.id} className={props.isLoader ? `${s.block_opacity}` : `${s.block}`}>
            <div className={s.block__logo}>
              <img src={u.photos.small != null ? u.photos.small : userLogo} alt="logo" className={s.logo}/>
              {
                u.followed
                  ? <button className={s.button} onClick={() => {
                    props.unfollow(u.id)
                  }}>UNFOLLOW</button>
                  : <button className={s.button} onClick={() => {
                    props.follow(u.id)
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
              return <span
                className={props.currentPage === e ? `${s.numpages_selected}` : `${s.numpages}`}
                onClick={() => {
                  props.onPageChanged(e)
                }}
                key={e}
              > {e} </span>
            })
          }
        </>
      </div>
    </>
  )
}

export default Users
