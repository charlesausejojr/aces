import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './About.css'
import InfoIcon from '@material-ui/icons/Info';

function About() {
    const imgStyle = {
        height: '150px',
        margin: '20px',
        padding: '20px',
    };

    return (
        <div className='about'>
        <Card>
            <CardContent>
             <h1><span><InfoIcon/></span> About Us</h1>
             <Typography className="about__us" style={{ fontSize: '25px' }}>
             The Association of Cebuano Eagle Scouts (ACES) Lapu-Lapu City Chapter is an organization under the scouting movement for the Cebu Council Boy Scouts of the Philippines. Its members are the scouts holding the highest rank in the advancement scheme of Philippine Scouting, the Eagle Scout rank. As a non-profit organization, it commits to continue their sworn duty which is to serve the country and community without limits being a role model for the future generation to follow.
             </Typography>
             <div className="about__logos">
             <Card>
            <img
                style={imgStyle}
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Boy_Scouts_of_the_Philippines.svg/1200px-Boy_Scouts_of_the_Philippines.svg.png"
                alt=""
             />
            </Card>
            <Card>
            <img
                style={imgStyle}
                src="https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/s720x720/124367634_4110262128991212_3527509184584853020_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_eui2=AeEVvLhDpdKvJdME3J4PSdo4eS5sBP55qZt5LmwE_nmpmzur6zCkr5pyqAnfuO7Do2jVAsOCgPv0cF6JVszDRZWU&_nc_ohc=xuc8lWvixUEAX9CRcZV&_nc_ht=scontent.fceb2-2.fna&tp=7&oh=5af0d4fdeadbf8d5d4999b1b3eff60b0&oe=5FD55795"
                alt=""
             />
            </Card>
              <Card>
              <img
                style={imgStyle}
                src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.0-9/36370366_700947776917098_6298696636256223232_n.png?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFjEm8YrRk3iXZt9FeydQapHI3VSF0ipCccjdVIXSKkJ2gRyEygjoTMDEC4C762oZHamRhHPtpQ8TPg1hNF-OS1&_nc_ohc=rJb34zQWqB0AX83fVdE&_nc_ht=scontent.fceb2-1.fna&oh=38e01492cc294ead3bb0e83374d3d2a4&oe=5FD841BA"
                alt=""
             />
              </Card>
             </div>
           
              
            </CardContent>
            
            
        </Card>
            
        </div>
    )
}

export default About
