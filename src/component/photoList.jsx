import { useSelector, useDispatch } from "react-redux"
import { React, useEffect, useState } from "react";
import { searchPhoto } from "../features/search/searchSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImageListItem from '@mui/material/ImageListItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addFavorite } from "../features/favorite/favoriteSlice";
import Pagination from '@mui/material/Pagination';
import Proof from "./proof";
import SearchOrder from "./searchOrder";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export function PhotoList() {

    let dispatch = useDispatch()
    let photos = useSelector(store => store.search.list)
    let favorite = useSelector(store => store.favorite.list)
    let [page, setPage] = useState(1)
    let [styleAddPhoto, setStyleAddPhoto] = useState({ display: 'none' })
    let time;


    useEffect(() => {
        dispatch(searchPhoto({ page }))
    }, [page]
    )


    let handleClick = (e) => {
        dispatch(addFavorite(e))
        setStyleAddPhoto({
            backgroundColor: 'green',
            width: '100px',
            position: 'fixed',
            bottom: '200px',
            right: '50px',
            textAlign: 'center',
            color: 'white'
        })
        time = setTimeout(() => {
            setStyleAddPhoto({ display: 'none' })
        }, 1500);
    }

    let handleChange = (e, p) => {
        setPage(p)
    }

    return (
        <>
            <Proof string={'Find you photo'} />
            <SearchOrder />
            <CssBaseline />
            <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {photos.map((index, i) => {
                    return (<ImageListItem key={photos[i].id} style={{ height: '300px', width: '300px', margin: '10px 0' }} >
                        <img
                            src={photos[i].urls.small_s3}
                            alt={photos[i].alt_description}
                        />
                        {favorite.some(item => item.id === photos[i].id) ?
                            <FavoriteIcon style={{ color: 'red', position: 'relative', top: '-35px', left: '10px', fontSize: '30px' }} /> :
                            <FavoriteBorderIcon style={{ color: 'red', position: 'relative', top: '-35px', left: '10px', fontSize: '30px' }} onClick={() => handleClick({
                                id: photos[i].id,
                                width: photos[i].width,
                                height: photos[i].height,
                                likes: photos[i].likes,
                                urls: photos[i].urls,
                                description: photos[i].alt_description,
                                auxDescription: photos[i].alt_description,
                                date: new Date()
                            })} />}
                    </ImageListItem>
                    )
                })}
            </Container>
            <div style={{ margin: '20px', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={10}
                    page={page}
                    onChange={handleChange}
                />
            </div>
            <div style={styleAddPhoto}>
                <p>The photo is add</p>
            </div>
        </>
    )
};


