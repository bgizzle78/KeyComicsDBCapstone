import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllComics, searchComics } from "../modules/ComicsManager";
import SearchResults from "./SearchResults";

const SearchList = () => {
    const [comics, setComics] = useState([]);
    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    // const getComics = () => {
    //     getAllComics().then(allComics => setComics(allComics));
    // };

    const searchAllComics = (e) => {
        // e.preventDefault()  //necessary because using a form element, not necessary if using <section>  
        searchComics(query).then(comic => setComics(comic));
    };

    // useEffect(() => {
    //     getComics(comics);
    // }, []);

    return (<>
        <h2 className="welcome">Search Comic DB</h2>
        <form className="row g-3">
            <div>
                <input className="form-control" property="search" onChange={e => setQuery(e.target.value)} placeholder="Enter Comic Title" />
            </div>
            <button onClick={() => {
                searchAllComics();
            }} className="btn btn-primary">Submit</button>
        </form>
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    {comics.map((comic) => (
                        <SearchResults key={comic.id} comic={comic} /> //using key and prop
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default SearchList;