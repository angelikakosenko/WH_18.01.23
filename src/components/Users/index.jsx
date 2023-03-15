import React from 'react'
import style from './style.module.css'

export default function User({firstname, lastName, age, region}) {
  return (
    <div className={style.card}>
        <img src="" alt="" width={'300px'} height={'200px'}/>
        <p>{firstname} {lastName}</p>
        <p>age old: {age}</p>
        <p>{region}</p>
        <button>Add to friends list</button>
    </div>
  )
}
