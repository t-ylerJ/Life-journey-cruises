const BigPicture = () => {
  return (

<div className="carousel w-auto">
  <div id="slide1" className="carousel-item relative w-full">
    <div id="item1" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/celebrate.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide7" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full">
    <div id="item2" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/party.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full">
    <div id="item3" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/adventure_awaits.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>


  <div id="slide4" className="carousel-item relative w-full">
    <div id="item4" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/dream.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative w-full">
    <div id="item5" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/enjoy.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide6" className="carousel-item relative w-full">
    <div id="item6" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/discover_beauty.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide5" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide7" className="carousel-item relative w-full">
    <div id="ite7" className="carousel-item w-full">
      <video autoPlay loop muted className="w-full">
      <source src="../public/FUN_CRUISES.mp4" type="video/mp4" />
      <track kind="captions" srcLang="en" src="/videos/captions1.vtt" />
      Your browser does not support the video tag.
      </video>
    </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide6" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  )
}

export default BigPicture;
