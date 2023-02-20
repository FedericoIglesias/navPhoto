import { React, useState } from "react";
import { useDispatch, } from "react-redux";
import ImageListItem from '@mui/material/ImageListItem';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { removeFavorite } from "../features/favorite/favoriteSlice";
import DownloadIcon from '@mui/icons-material/Download';
import { saveAs } from "file-saver";
import { ModalDescription as Modal } from "./modalDescription";

const FavoritePhoto = ({ item, wasRemoved }) => {


    const dispatch = useDispatch();


    let handleClick = (e) => {
        dispatch(removeFavorite(e))
        wasRemoved()
        
    }

    let handleDownload = (e) => {
        saveAs(e)
    }

    return (
        <>
            <div style={{ height: '600px', position: 'relative' }}>
                <ImageListItem style={{ height: '300px', width: '300px', padding: '0px' }}>
                    <img
                        src={item.urls.small_s3}
                        alt={item.description}
                    />
                </ImageListItem>
                <div style={{ color: 'white', margin: '0', padding: '0 7px' }} >
                    <p>Likes: {item.likes}</p>
                    <p>Width: {item.width}</p>
                    <p>Height: {item.height}</p>
                    <p>Description: {item.description}</p>
                </div>
                <HeartBrokenIcon style={{ color: 'red', position: 'absolute', bottom: '20px', left: '10px' }} onClick={() => handleClick(item)} />
                <DownloadIcon style={{ color: 'white', position: 'absolute', bottom: '20px', left: '260px' }} onClick={() => handleDownload(item.urls.regular)} />
                <div style={{ position: 'absolute', left: '115px', bottom: '15px' }}>
                    <Modal id={item.id} auxDescription={item.auxDescription} />
                </div>
            </div>

        </>
    )
};

export default FavoritePhoto