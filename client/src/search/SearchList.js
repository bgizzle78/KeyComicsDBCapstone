import React, { useState } from "react";
import { searchComics } from "../modules/ComicsManager";
import SearchResults from "./SearchResults";

const SearchList = () => {
    const [comics, setComics] = useState([]);
    const [query, setQuery] = useState("");

    const searchAllComics = (e) => {
        // e.preventDefault()  //necessary using a form element, not necessary if using <section>  
        searchComics(query).then(comic => setComics(comic));
    };

    return (
        <div className="container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="row justify-content-center" style={{ backgroundImage: `url(https://s3.amazonaws.com/comicgeeks/comics/covers/large-7057425.jpg?1669371019)` }}>
                <h1 style={{ color: 'white', marginTop: '20px' }}>Search Comics</h1>
                <section className="row g-3">
                    <div>
                        <input className="form-control" property="search" onChange={e => setQuery(e.target.value)} placeholder="Enter Comic Title" />
                    </div>
                    <button style={{ background: 'lightgreen', color: 'green', marginRight: '10px' }} onClick={() => {
                        searchAllComics();
                    }} className="btn btn-primary">Submit</button>
                </section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="cards-column">
                            {comics.map((comic) => (
                                <div style={{ display: 'flex' }}>
                                <SearchResults key={comic.id} comic={comic} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchList;