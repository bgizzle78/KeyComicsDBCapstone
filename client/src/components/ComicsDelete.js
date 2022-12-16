import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getById, deleteComics } from "../modules/ComicsManager";
import { Button } from "reactstrap";

const ComicsDelete = () => {
    const [chosenComic, setChosenComic] = useState({});

    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(
        () => {
            getById(id).then((c) => { setChosenComic(c) }).then(console.log(chosenComic))

        },
        []
    )

    console.log(chosenComic)


    const Delete = () => {
        deleteComics(chosenComic.id).then((c) => {
            navigate(`/comics`)
        })
    }
    const Cancel = () => {
        navigate('/comics')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', letterSpacing: '.5px', alignItems: 'center', margin: '45px', height: '30px', width: '500px', justifyContent: 'space-between' }}>
            <h2 style={{ marginBottom: '45px' }}>Are you sure you want to delete this comic book?</h2>
            <div style={{ display: 'flex' }}>
                <h3 style={{ marginRight: '30px' }}>{chosenComic.title} #{chosenComic.issueNumber}</h3>
                <Button style={{ marginRight: '10px' }} onClick={(c) => {
                    Delete()
                }}>Delete</Button>
                <Button onClick={(c) => {
                    Cancel()
                }}>Cancel</Button>
            </div>
        </div>
    )
}

export default ComicsDelete;