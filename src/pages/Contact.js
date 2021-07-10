import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Contact.css'
import EmailIcon from '@material-ui/icons/Email';
import { Instagram, Mail, YouTube } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
function Contact() {
    const anchorStyle = {
        textDecoration: 'none',
        color: 'black'
    };
    return (
        <div className='contact'>
            <Card>
            <CardContent>
             <h1><span><EmailIcon/></span> Contact Us</h1>
            
             <div className="contact__details">
                <FacebookIcon style={{fontSize: '30px', color: '#3b5998'}}/>
                <a style={anchorStyle} href="https://web.facebook.com/aceslapulapu"><span>Message us in Facebook</span></a>
             </div> 
             <div className="contact__details">
                <Mail style={{fontSize: '30px'}}/>
                <a style={anchorStyle} href="mailto:aces.lapulapu@gmail.com"><span>Send us an Email</span></a>
             </div> 
             <div className="contact__details">
                <Instagram  style={{fontSize: '30px', color: '#fd5949'}}/>
                <a style={anchorStyle} href="https://www.instagram.com/aceslapulapu/?hl=en"><span>Follow us on Instagram</span></a>
             </div> 
             <div className="contact__details">
                <YouTube style={{fontSize: '30px', color: 'red'}}/>
                <a style={anchorStyle} href="https://www.youtube.com/channel/UCAgigDMkmlTmJ_cZpPZQwGw"><span>Subscribe to our Youtube channel</span></a>
             </div> 

             </CardContent>
        </Card>
        </div>
    )
}

export default Contact
