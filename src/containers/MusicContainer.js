import React, {useState, useEeffect, useEffect} from 'react';

const MusicContainer = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    getMusic();
  }, [])

  const getMusic = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(results => results.json())
    .then(musicList => setMusicList(musicList));
  }
  return (
      <h1>MusicContainer</h1>
  );
}

export default MusicContainer;
