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
        <source src="bigpicture/scuba.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div  className="carousel-item w-[33.3%]">
        <video autoPlay loop muted >
        <source src="bigpicture/shiptop.mp4" type="video/mp4" />
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
        <source src="bigpicture/beach.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>

      <div className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/dreamship.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
        Your browser does not support the video tag.
        </video>
      </div>
    </div>


    <div id="slide3" className={`flex carousel-item relative w-full ${currentSlide === 3 ? 'block' : 'hidden'}`}>
      <div  className="carousel-item w-[33.3%] ">
        <video autoPlay loop muted >
        <source src="bigpicture/rocks.mp4" type="video/mp4" />
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
      
    </div>
  </div>
)}

export default BigPicture;
