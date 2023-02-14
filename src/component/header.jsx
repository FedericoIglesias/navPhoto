import React from "react";


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
            <p>Home</p>
            <p>My Likes</p>
            </nav>
        </div>
    )
}

export default Header;