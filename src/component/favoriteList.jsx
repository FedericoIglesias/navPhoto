import { React, useState } from "react";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
import Proof from "./proof";
import SearchOrder from "./searchOrder";
import FavoritePhoto from "./favoritePhoto";
import { Link } from "react-router-dom";

function FavoriteList() {

    let myFavorite = useSelector(store => store.favorite.list)

    let [styleRemovePhoto, setStyleRemovePhoto] = useState({ display: 'none' })
    let time;

    let wasRemoved = () => {
        setStyleRemovePhoto(
                {
                        backgroundColor: 'red',
                        width: '100px',
                        position: 'fixed',
                        bottom: '200px',
                        right: '50px',
                        textAlign: 'center',
                        color: 'white'
                    })
                time = setTimeout(() => {
                    setStyleRemovePhoto({ display: 'none' })
                }, 1500)
            }



    return (
        <>
            <Proof string={'Enjoy your favorite photos'} />
            <SearchOrder />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {myFavorite.length == 0 ? <button style={{ margin: '20px', backgroundColor: '#900c3f' }} >
                    <Link to='/navPhoto' style={{ textDecoration: 'none', color: 'white' }} >Go Home</Link></button> :
                    myFavorite.map((item) => {
                        return (
                            <Container style={{ height: '600px', width: '300px', margin: '20px 20px', padding: '0px', backgroundColor: 'black' }}>
                                <FavoritePhoto item={item} key={item.id} wasRemoved={wasRemoved} />
                            </Container>
                        )
                    })}
            </div>
            <div style={styleRemovePhoto}>
                <p>The photo was removed</p>
            </div>
        </>
    )
}

export default FavoriteList
