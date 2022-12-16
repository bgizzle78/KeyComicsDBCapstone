import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Comics from './Comics';
import { getAllComics, getById } from "../modules/ComicsManager";
import { CardImg, Button } from "reactstrap";

const ComicList = () => {
    const [comics, setComics] = useState([]);

    const navigate = useNavigate();

    const getComics = () => {
        getAllComics().then(allComics => setComics(allComics));
    };

    useEffect(() => {
        getComics();
    }, []);

    const handleDeleteClick = (id) => {
        getById(id).then((e) => { navigate(`/deleteComic/${id}`) })
    }

    const handleEditClick = (id) => {
        getById(id).then((e) => { navigate(`/editComic/${id}`) })
    }

    return (
        <>
            <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="row justify-content-center" style={{ background: "lightgray", display: 'flex', flexDirection: 'column' }}>
                    <h1 style={{ marginTop: '20px' }}>Comics DB</h1>
                    <Button onClick={(e) => {
                        navigate('/createComic');
                    }} style={{ background:"lightblue", color: '', marginTop: '15px', width: '120px' }}
                    >Add A New Comic</Button>
                    <div className="cards-column">
                        {comics?.map((comics) => (
                            <div style={{ background: '', display: 'flex' }}>
                                <Comics key={comics.id} comic={comics} />
                                <Button onClick={(e) => {
                                    handleDeleteClick(comics.id);
                                }} style={{ background: 'lightcoral', width: '55px', height: '20px', margin: '5px' }}>Delete</Button>
                                <Button onClick={(e) => {
                                    handleEditClick(comics.id);
                                }} style={{ variant: 'outline-success', width: '55px', height: '20px', margin: '5px' }}>Edit</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div></>
    );
};

export default ComicList;
