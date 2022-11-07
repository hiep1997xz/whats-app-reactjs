import React from 'react'
import { Link } from 'react-router-dom'

const InboxItem = () => {
  return (
    <div className="conversation flex rel aic">
      <div className="you rel flex aic">
        <Link className="user">
          <img
            src={`https://placeimg.com/50/50/people?T=${new Date().getTime()}`}
            alt=""
          />
        </Link>
      </div>
      <div className="meta rel flex aic">
        <div className="info rel flex col">
          <h2 className="name s14 wordwrap">Example</h2>
          <h2 className="last-msg s13 c333 wordwrap">Example abc abc</h2>
        </div>
        <div className="extra rel flex col aic">
          <h2 className="stamp s11 c777">11:04 AM</h2>
          <div className="badge rel s12 cfff">99+</div>
        </div>
      </div>
    </div>
  )
}

export default InboxItem
