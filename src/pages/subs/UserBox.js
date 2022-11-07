import React from 'react'
import { Link } from 'react-router-dom'
import iconChat from '../../images/chat.png'
import more from '../../images/more.svg'

const UserBox = () => {
  return (
    <div className="userbox flex">
        <div className="you rel flex aic">
          <Link className="user">
            <img src="https://placeimg.com/50/50/people" alt="" />
          </Link>
        </div>

        <div className="actions ref flex aic">
          <button className="s24">
            <img src={iconChat} alt="" className="width" />
          </button>
          <button className="s24">
            <img src={more} alt="" className="width" />
          </button>
        </div>
      </div>
  )
}

export default UserBox;