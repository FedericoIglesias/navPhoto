import { useSelector, useDispatch } from "react-redux"
import { React, useState } from "react";
import { searchPhoto } from "../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';


export function PhotoList() {

    const search = useSelector(state => state)
    console.log(search)
    let dispatch = useDispatch()
    console.log(dispatch(searchPhoto('search/searchPhoto')))
    setTimeout(console.log(search), 10000)

    let [array, setArray] = useState(['primer cuadro', 'segundo cuadro', 'tercer cuadro', 'cuarto cuadro', 'quinto cuadro', 'sexto cuadro'])

    return (
        <>
            <CssBaseline />
            <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {array.map((index, i) => {
                    return (<Box sx={{ bgcolor: '#cfe8fc', height: '300px', width: '250px' }} style={{ margin: '10px 0px' }} >
                        <Skeleton
                            sx={{ bgcolor: 'grey.900' }}
                            variant="rectangular"
                            width={250}
                            height={300}
                        />
                    </Box >)
                })}
            </Container>
        </>
    )
}