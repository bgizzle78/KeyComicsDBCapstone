import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Comics from './Comics';
import { getAllComics, getById } from "../modules/ComicsManager";

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
        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="backgroundImage" style={{ backgroundImage: `url(https://s3.amazonaws.com/comicgeeks/comics/covers/large-3396860.jpg?1669371019)`, opacity: "" }}>
                <h1 style={{ color: 'white', marginTop: '20px' }}>Comics DB</h1>
                <button onClick={(e) => {
                    navigate('/createComic');
                }} style={{ background: 'lightgreen', color: 'green', marginTop: '15px', width: '120px' }}
                >Add A New Comic</button>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="cards-column">
                            {comics?.map((comics) => (
                                <div style={{ display: 'flex' }}>
                                    <Comics key={comics.id} comic={comics} />
                                    <button onClick={(e) => {
                                        handleDeleteClick(comics.id);
                                    }} style={{ background: 'lightcoral', width: '55px', height: '20px', margin: '5px' }}>Delete</button>
                                    <button onClick={(e) => {
                                        handleEditClick(comics.id);
                                    }} style={{ background: 'skyblue', width: '55px', height: '20px', margin: '5px' }}>Edit</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComicList;
