import React from 'react';

const MusicList = () => {
    
    const MusicNodes = musicList.map((song) => {
        return (
            <ListSong title={song["im:name"].label}/>
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