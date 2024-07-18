import { useEffect, useState } from 'react';

const BigPicture = () => {

  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const slides = ["#slide1", "#slide2", "#slide3"];
    const totalSlides = slides.length;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    };

    const interval = setInterval(nextSlide, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
  <div className="carousel w-full">

    <div id="slide1" className={`flex carousel-item relative w-full ${currentSlide === 1 ? 'block' : 'hidden'}`}>
      <div  className="carousel-item w-[33.3%]">
        <video autoPlay loop muted >
        <source src="bigpicture/854397-hd_1280_720_30fps.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div  className="carousel-item w-[33.3%]">
        <video autoPlay loop muted >
        <source src="bigpicture/2096548-hd_1920_1080_30fps (2).mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/CELEBRATE friends.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div> */}
    </div>


    <div id="slide2" className={`flex carousel-item relative w-full ${currentSlide === 2 ? 'block' : 'hidden'}`}>

      <div  className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/fun cruises daycruise.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div  className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/dream.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/4782135-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div> */}
    </div>


    <div id="slide3" className={`flex carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
      <div  className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/3094026-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div  className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/ADVENTURE awaitsmp4.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/PARTY.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

    {/* <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div> */}
    </div>
  </div>
)}

export default BigPicture;
