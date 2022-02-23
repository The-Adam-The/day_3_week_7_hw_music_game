import React, {useState, useEeffect, useEffect} from 'react';
import MusicList from '../components/MusicList'


const MusicContainer = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    getMusic();
  }, [])

  const getMusic = () => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(results => results.json())
    .then((data) => setMusicList(data['feed']['entry']));
    console.log(musicList)
  }
  return (
    <>
    <MusicList musicList={musicList}/>
    
    </>
  );
}

export default MusicContainer;
