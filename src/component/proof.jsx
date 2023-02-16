import { React } from "react";
import Box from '@mui/material/Box';
import proof from '../assets/proof.jpeg'


function Proof() {
    

    return (
        <>
            <Box >
                <div style={{position: 'relative'}}>
                <p style={{zIndex: 4, position: 'absolute', color: 'white', fontSize: '40px',width: '100%', textAlign: 'center'}}>Found your favorite photo</p>
                <img src={proof} alt="" style={{ height:'50vw', width: '100%' }}/>
                </div>
            </Box>
        </>
    )
}


export default Proof