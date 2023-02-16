import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

// const matches = useMediaQuery('(max-width:500px)');
function Footer (){
    return(
        <div style={{
            backgroundColor: '#900c3f', 
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 30px',
            flexWrap: 'wrap',
            
        }}>
            <h1>NavPhoto</h1>
            <p>Copyright by Iglesias Federico</p>
            <div>
            <a href="https://facebook.com/" target='_blank'><FacebookIcon style={{color: 'white'}}/></a>
            <a href="https://instagram.com/" target='_blank'><InstagramIcon style={{color: 'white'}}/></a>
            </div>
        </div>
    )
}


export default Footer;