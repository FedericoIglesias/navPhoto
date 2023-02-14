import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFavorite } from "../features/favorite/favoriteSlice";

function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)
    let dispatch = useDispatch()
console.log(myFavorite)

    let handleClick = (e) => {
        dispatch(removeFavorite(e))
    }


    return (
        <>
            <CssBaseline />
            <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {myFavorite.map((index, i) => {
                    return (<ImageListItem key={myFavorite[i].id} style={{ height: '300px', width: '300px', margin: '10px 0' }} >
                        <img
                            src={`${myFavorite[i].urls.small_s3}?w=248&fit=crop&auto=format`}
                            alt={myFavorite[i].alt_description}
                            loading="lazy"
                        />
                        <HeartBrokenIcon style={{ color: 'red', position: 'relative', top: '-30px', left: '10px' }} onClick={() => handleClick(myFavorite[i])} />
                    </ImageListItem>
                    )
                })}
            </Container>
        </>
    )
}

export default FavoriteList