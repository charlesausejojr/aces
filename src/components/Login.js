import React from 'react'
import './Login.css'
import {auth,provider} from '../firebase'
import { Button, Card, CardContent } from '@material-ui/core';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }

    var year = new Date().getFullYear();

    return (
        <div className='login'>
            <Card className='login__card'>
                <div className="login__logo">
                    <img 
                    src="https://i.ibb.co/3rZDXbr/aces.jpg"
                    alt="ismessage"
                    ></img>
                    <h1>ACES Lapu-Lapu Chapter</h1>
                </div>
                <Button onClick={signIn} type="submit">
                    Sign In
                </Button>
            </Card> 
            <h4>Sign in to join our discussion in the Interact section.</h4>
            <h5>Copyright &#169; {year} </h5>
        </div>
    )
}

export default Login
