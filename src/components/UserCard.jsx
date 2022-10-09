import React from 'react'
import {FaTrash} from "react-icons/fa"
import {BsFillPencilFill} from "react-icons/bs"
import {FiGift} from "react-icons/fi"
import "./styles/userCard.css"
const UserCard = ({user, deleteUserById, setUpdateInfo, setFormIsClose}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }


  return (
    <article className="user">
        
        <h2 className="user__name">{`${user.first_name} ${user.last_name}`}</h2>
        <br />
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>Email: </span>{user.email}</li>
            <li className='user__item'><span className='user__span'>Birthday: </span>
            <div className='user__item-container'>
            <FiGift className='user__gift'/> {user.birthday}
            </div>
            </li>
        </ul>

        <footer className='user__foter'>
        <button className='user__btn'  onClick={() => deleteUserById(user.id)}><FaTrash className='user__trash'/></button>
        <button className='user__btn'  onClick={handleEdit}><BsFillPencilFill className='user__edit'/></button>
        </footer>
        
    </article>
  )
}

export default UserCard