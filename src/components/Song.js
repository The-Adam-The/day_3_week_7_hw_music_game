
import React from "react";

const Song = ({position, songTitle, songArtist, songImage, genre}) => {

    return (
        <div className="song">
           <div className="position">
                <h1>{position}</h1>
            </div>
            <div className="song-info">
                <h3 className="song-title">{songTitle}</h3>
                <h4 className="song-artist">{songArtist}</h4>
                <h4>{genre}</h4>
            </div>
            <div className="image-div">
                <img className="song-image" src={songImage} alt="" />
            </div>
        </div>
    );
}

export default Song;