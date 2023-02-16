import {React, useEffect} from "react";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';

import FavoritePhoto from "./favoritePhoto";

function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)
    

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {myFavorite.map((item) => {
                return (
                    <Container style={{ height: '600px', width: '300px', margin: '20px 20px', padding: '0px', backgroundColor: 'black' }}>
                        <FavoritePhoto item={item} key={item.id} />
                    </Container>
                )
            })}


        </div>
    )
}

export default FavoriteList