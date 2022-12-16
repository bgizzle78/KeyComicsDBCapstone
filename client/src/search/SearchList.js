import React, { useState } from "react";
import { searchComics } from "../modules/ComicsManager";
import SearchResults from "./SearchResults";

const SearchList = () => {
    const [comics, setComics] = useState([]);
    const [query, setQuery] = useState("");

    const searchAllComics = (e) => {
        // e.preventDefault()  //necessary because using a form element, not necessary if using <section>  
        searchComics(query).then(comic => setComics(comic));
    };

    return (<>
        <h2 className="welcome">Search Comics</h2>
        <section className="row g-3">
            <div>
                <input className="form-control" property="search" onChange={e => setQuery(e.target.value)} placeholder="Enter Comic Title" />
            </div>
            <button onClick={() => {
                searchAllComics();
            }} className="btn btn-primary">Submit</button>
        </section>
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