import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";

const Comics = ({ comic }) => {
    return (
        <Card className="m-4" style={{ font: "", background: "lightgray", color: "", display: 'flex', flexDirection: 'column' }}>
            <CardBody>
                <p className="text-left px-2">Title: {comic.title}</p>
                <p className="text-left px-2">Issue: #{comic.issueNumber}</p>
                <p className="text-left px-2">Artist: {comic.coverArtist}</p>
                <p className="text-left px-2">Writer: {comic.storyWriter}</p>
                <p className="text-left px-2">Release Date: {comic.comicReleased}</p>
                <CardImg width="200px" height="300px" top src={comic.coverImage} alt={comic.title} />
            </CardBody>
        </Card>
    );
};

export default Comics;
