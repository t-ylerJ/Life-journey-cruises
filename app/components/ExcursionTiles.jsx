
import { useState, useEffect }  from "react";
const ExcursionTiles = ({dailyExcursions}) => {
  const [clickedBoxes, setClickedBoxes] = useState([]);
  const [selectedExcursions, setSelectedExcursions] = useState([]);

  useEffect(() => {
    const excurs = localStorage.getItem('excursions');
    if(excurs){
      setSelectedExcursions(JSON.parse(excurs));
      const ids = JSON.parse(excurs).map((exc) => exc.id);
      setClickedBoxes([...ids]);
    }
  },[]);

  const boxOnClick = (excursionId) => {
    if(clickedBoxes.includes(parseInt(excursionId))) {
      setClickedBoxes(clickedBoxes.filter((box) => box !== parseInt(excursionId)));
      setSelectedExcursions(selectedExcursions.filter((exc) => parseInt(exc.id) !== parseInt(excursionId)));
      localStorage.setItem('excursions', JSON.stringify(selectedExcursions.filter((exc) => parseInt(exc.id) !== parseInt(excursionId))));
    } else {
      setClickedBoxes([...clickedBoxes, parseInt(excursionId)]);
      for(let i = 0; i < dailyExcursions.length; i++){
        dailyExcursions[i].excursions.forEach((excursion) => {
          if(parseInt(excursion.id) === parseInt(excursionId)){
            const {id, name, price} = excursion;
            setSelectedExcursions([...selectedExcursions, {"id": id, "name": name, "price": price}]);
            localStorage.setItem('excursions', JSON.stringify([...selectedExcursions, {"id": id, "name": name, "price": price}]));
          }
        })
      }
    }
  }

  const adjustTime = (timeStamp) => {
    const date = new Date(timeStamp);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const adjustMinutes = minutes < 30 ? `00` : '30';
    return `${hours}:${adjustMinutes}`
   }
  return (

      <div className="flex flex-col justify-center items-center overflow-hidden p-10" >
        {dailyExcursions && dailyExcursions.map((daily) => {
          return(
            <div key={daily.day} className=" w-[100%] rounded-lg shadow-lg overflow-hidden bg-gray-200 text-center p-10 m-10"  >
              <h2 className="text-5xl p-2" >Day: {daily.day}</h2>
              <h2 className="text-4xl border-b-1 border-white p-10">Port: {daily.portname}</h2>
              <div className="flex flex-1 justify-between">
              {
                daily.excursions && daily.excursions.map((excursion) => {
                  return (
                    <button
                      className={
                        clickedBoxes.includes(parseInt(excursion.id))
                        ? "flex flex-col bg-blue-300 border-r-2"
                        : "flex flex-col bg-white border-r-2"
                      }
                      onClick={()=>{
                        boxOnClick(excursion.id);
                      }}
                      value={excursion.id}
                      key={excursion.id}
                    >
                      <h2>{excursion.name}</h2>
                      <img className="w-48 h-32 rounded" src={excursion.image} alt={excursion.name} onClick={(e)=>{
                        boxOnClick(excursion.id);
                      }} />
                      <span>{adjustTime(excursion.time)}</span>
                      <span>${excursion.price}</span>
                    </button>
                  )
                })
              }
              </div>
            </div>
          )
        })}
      </div>

  )
}

export default ExcursionTiles
