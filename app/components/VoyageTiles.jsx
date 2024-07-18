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

  return (
    <>
      <div className="flex items-center justify-center my-4">
      <div
        className="text-6xl font-bold"
        style={{
          background: 'url(https://images.pexels.com/photos/4614703/pexels-photo-4614703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center center',
          backgroundSize: 'cover',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: 'transparent',
          WebkitTextStroke: '2px #056DBD'
        }}
      >
        FIND YOUR JOURNEY
      </div>
    </div>

<div className="flex  justify-evenly items-center w-[100%] my-4">
{voyages.map((voyage, index)=> {
  return (
<div className="h-96 w-72 bg-transparent cursor-pointer group perspective" key={index}>
  <div className="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
    <div className="absolute  back-hidden border-2 w-full h-full">
      <img src={`${voyage.url}`} alt={`${voyage.name} Cruise`} className="w-full h-full object-cover" ></img>
      <div className="absolute top-20 left-20 text-5xl text-white">{`${voyage.name} Cruise`}</div>
    </div>


    <div className="absolute rotate-y-180 back-hidden w-full h-full flex">
    <img src={`${voyage.url}`} alt={`${voyage.name} Cruise`} className="w-full h-full object-cover opacity-50" ></img>
    <div className="absolute bottom-5 left-5 text-2xl text-black">{`$${voyage.price}`}</div>
          <div className="absolute top-20 left-20 text-5xl text-black">{`${voyage.name} Cruise`}</div>
           <Link to={`/voyages/${voyage.id}`}>
            <button className="absolute bottom-5 right-5 bg-primary text-black py-2 px-4 rounded-full">EXPLORE</button>
          </Link>
          <div className="absolute top-5 right-5 text-white"><Music index={index}/></div>
        </div>

    </div>

  </div>


)})}

</div>

    </>
  )
}

export default VoyageTiles


