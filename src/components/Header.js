import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom'
import { ExitToAppRounded } from '@material-ui/icons'
import {auth} from "../firebase";

function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <div className="header__logo">
                    <img 
                        src="https://i.ibb.co/3rZDXbr/aces.jpg"
                        alt='aces-logo'
                    /> 
                </div>

                <div className="header__name">
                <h3>ACES Lapu-Lapu Chapter</h3>
                <p>Association of Cebuano Eagle Scouts</p>
                </div>

                
            </div>

            <div className="header__right">
                 <Link className='header__link' to='/'>
                     <Button > Home </Button>
                </Link>
                <Link className='header__link' to='/about'>
                     <Button > About Us </Button>
                </Link>
                <Link className='header__link' to='/contact'>
                     <Button > Contact Us </Button>
                </Link>
                <Link className='header__link' to='/interact'>
                     <Button > Interact </Button>
                </Link>
                <IconButton className='header__logout' onClick = {() => auth.signOut()}>
                <ExitToAppRounded  />
                <small className='logout'>Logout</small>
                </IconButton>
                
            </div>
            
        </div>
    )
}

export default Header
