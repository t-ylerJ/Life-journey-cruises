const PurchaseSummary = () => {
  var room = {
    name: 'Room Name',
    price: 799,
    image: 'url here'
  };
  var eventList = [
    {name: 'Event 1', price: 50},
    {name: 'Event 2', price: 75},
    {name: 'Event 3', price: 27}
  ];
  var total = room.price;
  return (<div className="inline-block">
    <div className="bg-gray-200">
      <div className="inline-block h-32 w-80">
        <h1 className="font-semi-bold text-4xl mt-8 ml-8">Room 1</h1>
        <p className="text-sm ml-8">{room.name}</p>
      </div>
      <div className="inline-block float-right">
        <img className="w-32 h-20 mt-3 mr-4" alt="filler" src="https://static.wikia.nocookie.net/kirby/images/c/c6/Kirby_RtDDX.png/revision/latest?cb=20230726032205&path-prefix=en"></img>
        <p className="text-center">{room.price}</p>
      </div>
    </div>
    <div className="mt-24 w-80">
      <h1 className="font-semi-bold text-3xl">Purchase Summary:</h1>
      <section className="flex items-baseline">
        <p>{room.name} Room</p>
        <span className="flex-1 truncate">.........................................................................................................</span>
        <p>{room.price}</p>
      </section>
      {eventList.map((item) => {
        total += item.price;
        return (
          <section className="flex items-baseline" key={item.name}>
            <p >{item.name}</p>
            <span className="flex-1 truncate">......................................................................................................</span>
            <p>{item.price}</p>
          </section>
        )
      })}
      <section className="mt-10 flex items-baseline">
        <p>Total</p>
        <span className="flex-1 truncate">......................................................................................................................</span>
        <p>{total}</p>
      </section>
    </div>
  </div>)
}

export default PurchaseSummary
