
import React from "react";

const Song = ({songTitle, songArtist, songImage, position, genre}) => {

    return (
        <div>
            <img src={songImage} alt="" />
            <h4>Position: {position}</h4>
            <h4>Song:{songTitle}</h4>
            <h4>Artist: {songArtist}</h4> 
            <h4>Genre: {genre}</h4>
        </div>
    );
}

export default Song;