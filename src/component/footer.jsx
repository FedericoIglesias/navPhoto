import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer (){
    return(
        <div style={{
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center'
        }}>
            <h1>NavPhoto</h1>
            <p>Copyright by Me</p>
            <div>
            <FacebookIcon/> 
            <InstagramIcon/>
            </div>
        </div>
    )
}


export default Footer;