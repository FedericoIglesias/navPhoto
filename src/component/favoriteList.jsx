import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Skeleton from '@mui/material/Skeleton';
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFavorite } from "../features/favorite/favoriteSlice";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";


function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)
    let dispatch = useDispatch()


    let handleClick = (e) => {
        dispatch(removeFavorite(e))
    }

    let handleDownload = (e) => {
        saveAs(e)
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
                        <DownloadIcon style={{ color: 'white', position: 'relative', top: '-30px', left: '240px' }} onClick={() => handleDownload(myFavorite[i].urls.regular)}/>
                    </ImageListItem>
                    )
                })}
            </Container>
        </>
    )
}

export default FavoriteList