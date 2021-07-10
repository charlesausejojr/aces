import { Avatar } from '@material-ui/core'
import React from 'react'
import './Answer.css'

function Answer({id, contents: { displayName, email, message, photo, uid,timestamp}}) {

    return (
        <div className='answer'>
            <div className="answer__info">
                <Avatar className="answer__photo" src={photo}/>
                <h4>{displayName}</h4>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>
            
            <div className="answer__message">
            <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Answer
