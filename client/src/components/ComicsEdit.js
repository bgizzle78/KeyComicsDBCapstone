import { React, useState, useEffect } from "react";
import { editComics, getById } from "../modules/ComicsManager";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const ComicsEdit = () => {
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


    const Edit = () => {
        const updateComic = {
            id: chosenComic.id,
            title: chosenComic.title,
            issueNumber: chosenComic.issueNumber,
            coverArtist: chosenComic.coverArtist,
            storyWriter: chosenComic.storyWriter,
            coverImage: chosenComic.coverImage,
            comicReleased: chosenComic.comicReleased
        }
        console.log(updateComic)
        editComics(updateComic).then((e) => {
            navigate('/comics')
        })
    }
    const Cancel = () => {
        navigate('/comics')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', letterSpacing: '.5px', alignItems: 'center', margin: '45px', height: '30px', width: '500px', justifyContent: 'space-between' }}>
            <h2 style={{ marginBottom: '45px' }}>Edit Comic</h2>
            <div style={{ background: "lightgray", display: 'flex' }}>
                <fieldset>
                    <input
                        style={{ marginRight: '10px' }}
                        type="text"
                        placeholder={chosenComic.title}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.title = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                    <input
                        style={{ marginRight: '10px' }}
                        type="text"
                        placeholder={chosenComic.issueNumber}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.issueNumber = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                    <input
                        style={{ marginRight: '10px' }}
                        type="text"
                        placeholder={chosenComic.coverArtist}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.coverArtist = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                    <input
                        style={{ marginRight: '10px' }}
                        type="text"
                        placeholder={chosenComic.storyWriter}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.storyWriter = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                    <input
                        style={{ marginRight: '10px' }}
                        type="text"
                        placeholder={chosenComic.coverImage}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.coverImage = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                    <input
                        style={{ marginRight: '10px' }}
                        type="date"
                        placeholder={chosenComic.comicReleased}
                        onChange={(e) => {
                            const copy = { ...chosenComic }
                            copy.comicReleased = e.target.value
                            setChosenComic(copy);
                        }
                        }
                    />
                </fieldset>
                <Button style={{ variant: "outline-success", marginRight: '10px' }} onClick={(e) => {
                    Edit()
                }}>Save</Button>
                <Button variant= "outline-warning" onClick={(e) => {
                    Cancel()
                }}>Cancel</Button>
            </div>
        </div>
    )
}

export default ComicsEdit;