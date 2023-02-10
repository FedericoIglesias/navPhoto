import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function Proof() {
    return (
        <>
            <Box
                sx={{
                    bgcolor: '#white',
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width={320}
                    height={150}
                />
            </Box>
        </>
    )
}


export default Proof