import { useEffect, useState } from 'react';

const PurchaseSummary = () => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem('bookingDetails')));
  }, []);
  var total = 0;
  if (details.selectedRooms) {
  return (<div className="inline-block">
    {
      details.selectedRooms.map((room, index) => {
        var imgSrc = `/rooms/${room.name}.png`;
        imgSrc = imgSrc.replace(/\s/g, '').toLowerCase();
        return (
          <div key={index} className="bg-gray-200">
            <div className="inline-block h-32 w-80">
              <h1 className="font-semi-bold text-4xl mt-8 ml-8">Room {index + 1}</h1>
              <p className="text-sm ml-8">{room.name}</p>
            </div>
            <div className="inline-block float-right">
              <img className="w-32 h-20 mt-3 mr-4" alt="filler" src={imgSrc}></img>
              <p className="text-center">{room.price}</p>
            </div>
          </div>
        )
      })
  }
    <div className="mt-24 w-80">
      <h1 className="font-semi-bold text-3xl">Purchase Summary:</h1>
      {details.selectedRooms.map((room, index) => {
        total += room.price;
        return (
          <section key={room.name + index} className="flex items-baseline">
            <p>{room.name} Room</p>
            <span className="flex-1 truncate">.........................................................................................................</span>
            <p>${room.price}</p>
          </section>
        )
      })}
      {details.exursions.map((item, index) => {
        total += item.price;
        return (
          <section className="flex items-baseline" key={item.name + index}>
            <p >{item.name}</p>
            <span className="flex-1 truncate">......................................................................................................</span>
            <p>${item.price}</p>
          </section>
        )
      })}
      <section className="mt-10 flex items-baseline">
        <p>Total</p>
        <span className="flex-1 truncate">......................................................................................................................</span>
        <p>${total}</p>
      </section>
    </div>
  </div>)
  }
}

export default PurchaseSummary
