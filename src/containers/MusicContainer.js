import React, {useState, useEeffect, useEffect} from 'react';
import MusicList from '../components/MusicList'


const MusicContainer = () => {
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    getMusic();
  }, [])

  const getMusic = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(results => results.json())
    .then((data) => setSongList(data['feed']['entry']));
    console.log(songList)
  }
  return (
    <>
    <MusicList songList={songList}/>
    
    </>
  );
}

export default MusicContainer;
