import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'

function Post({title,description,url}) {
    return (
        <div className='post'>

            <div className="post__top">
                    <div className="post__info">
                    <h1>{title}</h1>  
                    </div>
            </div>
            <div className="post__middle">
                    <p>{description}</p>
            </div>
            <div className="post__bottom">
                <img
                    src={url}
                    alt=''
                />
            </div>

        </div>
    )
}

export default Post
