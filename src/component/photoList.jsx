import { useSelector, useDispatch } from "react-redux"
import { React, useState, useEffect } from "react";
import { searchPhoto } from "../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';




export function PhotoList() {

    let dispatch = useDispatch()
    let photos = useSelector(store => store.search.list)

    useEffect(() => {
        dispatch(searchPhoto())
    }, []
    )
    console.log(photos)

    let addFavorite = (urls) =>{
        
    }


    return (
        <>
            <CssBaseline />
            <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {photos.map((index, i) => {
                    return (<ImageListItem key={photos[i].id} style={{height: '300px', width: '300px', margin: '10px 0'}} >
                        <img
                            src={`${photos[i].urls.small_s3}?w=248&fit=crop&auto=format`}
                            alt={photos[i].alt_description}
                            loading="lazy"
                        />
                            <FavoriteIcon style={{color: 'red', position: 'relative', top: '-30px', left: '10px'}} onClick={addFavorite(photos[i].id)}/>
                    </ImageListItem>
                    )
                    
                })}
            </Container>
        </>
    )
}



