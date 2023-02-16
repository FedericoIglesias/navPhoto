import React from "react";
import { Link } from "react-router-dom";



function Header (){
    return(
        <div style={{
            backgroundColor: '#900c3f',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
        }}>
            <h1 style={{marginLeft: '30px'}}>NavPhoto</h1>
            <nav style={{display: 'flex'}}>
            <Link to='/' style={{color: 'white', textDecorationLine: 'none'}} >Home</Link>
            <Link to='/my-likes' style={{color: 'white', textDecorationLine: 'none', margin: '0 30px',}} >My Likes</Link>
            </nav>
        </div>
    )
}

export default Header;