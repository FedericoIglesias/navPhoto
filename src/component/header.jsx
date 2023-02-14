import React from "react";
import { Link } from "react-router-dom";

function Header (){
    return(
        <div style={{
            backgroundColor: 'red',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            color: 'white'
        }}>
            <h1>NavPhoto</h1>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/my-likes'>My Likes</Link>
            </nav>
        </div>
    )
}

export default Header;