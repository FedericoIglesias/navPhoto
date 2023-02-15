import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { editDescription } from "../features/favorite/favoriteSlice";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
};

export let ModalDescription = (id, auxDescription) => {
    const [open, setOpen] = React.useState(false);
    let [description, setDescription] = useState('')
    let dispatch = useDispatch()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let handleChange = (e) => {
        setDescription(e)
        console.log(description)
    }

    let addDescription = (id, description) => {
        dispatch(editDescription({id, description}))
        setOpen(false)
        setDescription('')
    }

    let cancelDescription = () => {
        setOpen(false)
        setDescription('')
        console.log(id)
    }
    let defaultDescription = (id, description) => {
            dispatch(editDescription({id, description}))
            setOpen(false)
            setDescription('')
    }

    return (
        <div>
            <Button onClick={handleOpen}><EditIcon/></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Add description
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <input type="text" onChange={(e) => handleChange(e.target.value)}/>
                        </Typography>
                        <div>
                        <button onClick={() => {addDescription(id, description)}} >Ok</button>
                        <button onClick={cancelDescription}>Cancel</button>
                        <button onClick={() => {defaultDescription(id,id.auxDescription)}}>Defaul description</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}