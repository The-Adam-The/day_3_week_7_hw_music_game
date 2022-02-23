import React from 'react';
import Song from './Song'


const MusicList = ({songList}) => {
    
    const MusicNodes = songList.map((song, index) => {
        index += 1
        return (
            <Song position={index} songTitle={song['im:name'].label} songArtist={song['im:artist'].label} 
            songImage={song['im:image'][0].label} genre= {song.category.attributes.term} key={song['id'].label} />
        );
    });
    return (
        <div>
            <ul>
                {MusicNodes}
            </ul>
        </div>
    );

}

export default MusicList