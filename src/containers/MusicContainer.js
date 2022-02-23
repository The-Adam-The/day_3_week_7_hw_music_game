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
    <h1 className="title-text">How out of touch with mainstream music are you?</h1>
    <p className="instructions"> Each song you recognise gains you one point, the lower the score the more out of touch with mainstream trends you are! Whether you win or lose is up to you!</p>
    <MusicList songList={songList}/>
    
    </>
  );
}

export default MusicContainer;
