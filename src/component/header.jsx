import React from "react";
import { useEffect, useState } from "react";

function Header() {


    let [change, setChange] = useState("My Likes");

    let changePage = () => {change == 'My Likes'? setChange('Go back'): setChange('My Likes')}

    return (
        <>
            <h1>NavPhoto</h1>
            <button onClick={changePage}>{change}</button>
        </>
    );
}

export default Header;
