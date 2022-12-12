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
        <div className="container">
            <div className="row justify-content-center" style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ marginTop: '20px' }}>Key Comics DB </h1>
                <button onClick={(e) => {
                    navigate('/createComic')
                }} style={{ marginTop: '15px', width: '120px' }}
                >Add New Comic</button>
                <div className="cards-column">
                    {comics?.map((comics) => (
                        <div style={{ display: 'flex' }}>
                            <Comics key={comics.id} comic={comics} />
                            <button onClick={(e) => {
                                handleDeleteClick(comics.id)
                            }} style={{ width: '60px', height: '30px', margin: '5px' }}>Delete</button>
                            <button onClick={(e) => {
                                handleEditClick(comics.id)
                            }} style={{ width: '60px', height: '30px', margin: '5px' }}>Edit</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ComicList;
