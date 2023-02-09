import { useSelector, useDispatch } from "react-redux"
import React from "react";
import { searchPhoto } from "../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



export function PhotoList() {
    // const search = useSelector(state => state)

    // console.log(search)

    // let dispatch = useDispatch()

    // console.log(dispatch(searchPhoto('search/searchPhoto')))

    // setTimeout(console.log(search), 10000)

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100px' }} >
                    <p>ola ke ayes</p>
                </Box>
            </Container>
        </>
    )
}