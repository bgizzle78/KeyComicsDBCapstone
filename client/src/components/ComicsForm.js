import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllComics, addComics } from "../modules/ComicsManager";


export const ComicsForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [comic, update] = useState({
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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        const newComic = {
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
                navigate(`/comics`)
            })
    }

    const Cancel = () => {
        navigate('/comics')
    }

    return (
        <form className="comicForm">
            <h1 className="comicForm__Title" style={{ color: 'darkblue' }}>Add New Comic</h1>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Comic Title"
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
                    <label htmlFor="Artist">Artist:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Artist"
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
                    <label htmlFor="Writer">Writer:</label>
                    <input
                        autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Writer"
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
            <button style={{ background: 'skyblue', color: 'blue', marginRight: '10px' }} onClick={(clickEvent) => { handleSaveButtonClick(clickEvent) }} className="btn btn-primary">
                Save New Comic</button>
            <button style={{ background: 'lightcoral', color: 'red' }} onClick={(e) => {
                Cancel()
            }}>Cancel</button>
        </form>
    )
}

export default ComicsForm;