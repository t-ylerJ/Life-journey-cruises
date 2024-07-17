import { Link } from '@remix-run/react'
import React, {useState} from 'react';
import { MdOutlineMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";


 const Music = ({index}) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);
  const audioRef = React.createRef();
  let url = ["https://p.scdn.co/mp3-preview/1bd8b56f5623c6eee74601848b0abdca40688743?cid=67842053a10a4baa8123c85127d9face",
    "https://p.scdn.co/mp3-preview/07d87ee0985a6ff28152775f2f364c3d32d42059?cid=67842053a10a4baa8123c85127d9face",
    "https://p.scdn.co/mp3-preview/552fd288fa63c6335dcfe0e9101c00c6560f275c?cid=67842053a10a4baa8123c85127d9face",
    "https://p.scdn.co/mp3-preview/7591ef3ecaeef3609e06379918228198c83b3c48?cid=67842053a10a4baa8123c85127d9face",
    "https://p.scdn.co/mp3-preview/d2d7e717c72a4fa08b3a8b22722c7369e8aa587d?cid=67842053a10a4baa8123c85127d9face"
  ];

  const handleAudioToggle = () => {
    if(audioRef.current.paused) {
      audioRef.current.play();
      setCurrentlyPlaying(true);
    } else {
      audioRef.current.pause();
      setCurrentlyPlaying(false);
    }
 };


  return (
  <>
  <div className="audio-icon" onClick={handleAudioToggle}>
        {currentlyPlaying ? <MdOutlineMusicNote /> : <MdMusicOff />}
    </div>
    <audio ref={audioRef} src={url[index]}></audio>
  </>
)};

const VoyageTiles = ({voyages}) => {

  const [hoverStatus, setHoverStatus] = useState([false, false, false, false, false]);

  const handleMouseEnter = (index) => {
    var arr = [false, false, false, false, false];
    arr[index] = true;
    setHoverStatus(arr);
  };

  const handleMouseLeave = () => {
    setHoverStatus[false, false, false, false, false];
  };


  return (
    <div className="carousel carousel-center rounded-box">
      {voyages.map((voyage, index)=> (
        <div className="carousel-item h-96 mx-4 my-8 relative flex" key={index} style={{backgroundImage: `url(${voyage.url})`}} onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={handleMouseLeave} >
        <img src={`${voyage.url}`} alt={`${voyage.name} Cruise`} />
          <div className="absolute bottom-5 left-5 text-2xl text-white">{`$${voyage.price}`}</div>
          <div className="absolute top-20 left-20 text-5xl text-white">{`${voyage.name} Cruise`}</div>
          <Link to={`/voyages/${voyage.id}`}>
            <button className="absolute bottom-5 right-5 bg-primary text-black py-2 px-4 rounded-full">EXPLORE</button>
          </Link>
          {hoverStatus[index] ? <div className="absolute top-5 right-5 text-white"><Music index={index}/></div>: null}
        </div>
      ))}
    </div>
  )
}

export default VoyageTiles
