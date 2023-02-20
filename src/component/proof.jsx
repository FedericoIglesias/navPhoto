import { React } from "react";
import Box from '@mui/material/Box';
import proof from '../assets/proof.jpeg'


function Proof({string}) {
    

    return (
        <>
            <Box style={{paddingTop: '90px'}} >
                <div style={{position: 'relative'}}>
                <p style={{zIndex: 4, position: 'absolute', color: 'white', fontSize: '40px',width: '100%', textAlign: 'center'}}>
{string}
                </p>
                <img src={proof} alt="" style={{ height:'30vw', width: '100%' }}/>
                </div>
            </Box>
        </>
    )
}


export default Proof