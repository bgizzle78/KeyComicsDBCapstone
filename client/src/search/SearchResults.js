import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const SearchResults = ({ comic }) => {
    return (
        <div class="container">
            <Card className="m-4" style={{ margin: "2px", background: "lightgray", color: "", display: 'flex', flexDirection: 'column' }}>
                <CardBody>
                    <div className="card" style={{ margin: "3px" , border: "2px solid black", background: "lightgray", display: 'flex', flexDirection: 'column' }}>
                        <p className="text-left px-2">Title: {comic.title}</p>
                        <p className="text-left px-2">Issue: #{comic.issueNumber}</p>
                        <p className="text-left px-2">Artist: {comic.coverArtist}</p>
                        <p className="text-left px-2">Writer: {comic.storyWriter}</p>
                        <p className="text-left px-2">Release Date: {comic.comicReleased}</p>
                        <CardImg width="200px" height="300px" top src={comic.coverImage} alt={comic.title} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default SearchResults;
