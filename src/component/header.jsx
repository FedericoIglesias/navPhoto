import React from "react";
import { Link } from "react-router-dom";



function Header (){
    return(
        <div style={{
            backgroundColor: '#900c3f',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white',
            position: 'fixed',
            top: '0',
            zIndex: '10',
            width: '100%',
            height: '100px'
        }}>
            <h1 style={{marginLeft: '30px',fontSize: '40px', fontWeight: '700'}}>NavPhoto</h1>
            <nav style={{display: 'flex'}}>
            <Link to='/navPhoto' style={{color: 'white', textDecorationLine: 'none', fontSize: '16px',fontWeight: '700'}} >Home</Link>
            <Link to='/my-likes' style={{color: 'white', textDecorationLine: 'none', margin: '0 30px', fontSize: '16px', fontWeight: '700'}} >My Likes</Link>
            </nav>
        </div>
    )
}

export default Header;