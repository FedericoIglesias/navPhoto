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
            <p>My Likes</p>
        </div>
    )
}

export default Header;