import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAllComics, addComics } from "../modules/ComicsManager";


export const ComicsForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [comic, update] = useState({
        // UserProfileId: "",
        Title: "",
        IssueNumber: "",
        CoverArtist: "",
        StoryWriter: "",
        ComicReleased: "",
        CoverImage: ""
    })

    const [comics, setComics] = useState([])

    useEffect(() => {
        getAllComics().then(setComics);
    }, []);

    const navigate = useNavigate()

    // const localUser = localStorage.getItem("userProfile")
    // const userObject = JSON.parse(localUser)


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const newComic = {
            // UserProfileId: userObject.id,
            Title: comic.Title,
            IssueNumber: comic.IssueNumber,
            CoverArtist: comic.CoverArtist,
            StoryWriter: comic.StoryWriter,
            ComicReleased: comic.ComicReleased,
            CoverImage: comic.CoverImage
        }

        addComics(newComic)
            .then(r => r.json())
            .then(p => {
                navigate(`/`)
            })
    }

    const Cancel = () => {
        navigate('/')
    }

    return (
        <form className="comicForm">
            <h1 className="comicForm__Title">Add New Comic Form</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Comic title"
                        value={comic.Title}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.Title = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="IssueNumber">Issue Number:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Issue #"
                        value={comic.IssueNumber}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.IssueNumber = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="CoverArtist">Cover Artist:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Cover Artist"
                        value={comic.CoverArtist}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.CoverArtist = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Story Writer">Story Writer:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Story Writer"
                        value={comic.StoryWriter}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.StoryWriter = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Comic Released">Comic Released:</label>
                    <input className="form-control"
                        type="date"
                        value={comic.ComicReleased}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.ComicReleased = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="CoverImage">Cover Image URL:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Cover Image URL"
                        value={comic.CoverImage}
                        onChange={(changeEvent) => {
                            const copy = { ...comic }
                            copy.CoverImage = changeEvent.target.value
                            update(copy)
                        }} />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }} className="btn btn-primary">
                Save New Comic
            </button>
            <button onClick={(e) => {
                Cancel()
            }}>Cancel</button>
        </form>
    )
}

export default ComicsForm;