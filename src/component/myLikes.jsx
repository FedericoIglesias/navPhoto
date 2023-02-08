import React from "react";
import Header from "./header";
import Proof from "./proof";
import OrderBy from "./orderBy";
import Search from "./search";
import Card from "./card";
import Footer from "./footer";     


function MyLikes (){
    return (
        <div style={{backgroundColor: 'violet'}}>
        <Header/>
        <Proof/>
        <OrderBy/>
        <Search/>
        <Card/>
        <Footer/>
        </div>
    )
}

export default MyLikes;
