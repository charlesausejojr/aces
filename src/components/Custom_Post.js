
import React from 'react'
import './Post.css'

function Post({title,description,url}) {
    return (
        <div className='customPost'>

            <div className="customPost__top">
                    <div className="customPost__info">
                    <h1>{title}</h1>  
                    </div>
            </div>
            <div className="customPost__middle">
                    <p>{description}</p>
            </div>
            <div className="customPost__bottom">
                <img
                    src={url}
                    alt=''
                />
            </div>

        </div>
    )
}

export default Post
