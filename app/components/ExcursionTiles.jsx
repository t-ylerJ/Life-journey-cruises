const ExcursionTiles = ({excursions, checkChanged}) => {
  const onCheckExcursionChange = (event) => {
    checkChanged(event);
  }
  const adjustTime = (timeStamp) => {
    const date = new Date(timeStamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const adjustMinutes = minutes < 30 ? `00` : '30';
    return `${hours}:${adjustMinutes}`
   }


  return (
    <div>
      <div className="flex">
        {excursions.map((excursion) => {
          return(
            <div key={excursion.id} className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-gray-200 text-center p-3 m-3" >
              <h2>Port: {excursion.portname}</h2>
              <h2>{excursion.name}</h2>
              <img className="w-100% h-100% rounded" src={excursion.image} alt={excursion.name} />
              <p>{adjustTime(excursion.time)}</p>
              <p>${excursion.price}</p>
              <input type="checkbox" name={`excursion-${excursion.id}`} value={excursion.id} onChange={onCheckExcursionChange}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExcursionTiles
