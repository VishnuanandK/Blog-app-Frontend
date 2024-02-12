import React from 'react'
import "./landing.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Landing() {
  return (
    <div className='landing'>
        <div className="landingTitles">
            <span className="landingTitleSm">Welcome to</span>
            <span className="landingTitleLg">BlogSpace</span>
        </div>
        <div className='button'>
        <Link to={'/login'}><Button variant="outline-dark">Start Blogging <i className="ms-2 fa-solid fa-pen"></i></Button></Link>
        </div>

        <Link  to={'/home'} className='mt-3 text-black' >View Blogs</Link>
    </div>
  )
}

export default Landing