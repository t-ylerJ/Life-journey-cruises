
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

      <div className="flex bg-gray-100 flex-col justify-center items-center overflow-hidden p-10 m-10" >
        {dailyExcursions && dailyExcursions.map((daily) => {
          return(
            <div key={daily.day} className=" w-full p-0 m-0 rounded-lg shadow-lg border-overflow-hidden border-2 border-inherit bg-white justify-around text-center mb-4"  >
              <div className="w-full pt-5" >
                <h1 className="text-3xl font-bold" >Day: {daily.day}</h1>
                <h2 className="text-3xl p-5">Port: {daily.portname}</h2>
              </div>
              <div className="flex justify-around">
              {
                daily.excursions && daily.excursions.map((excursion) => {
                  return (
                    <button
                      className={
                        clickedBoxes.includes(parseInt(excursion.id))
                        ?
                        "w-[17%] h-96 flex items-left flex-col bg-blue-600 text-white border-2 p-5 mb-10 rounded-xl"
                        :
                        "w-[17%] h-96 flex items-left flex-col bg-gray-100 border-2 p-5 mb-10 rounded-xl"
                      }
                      onClick={()=>{
                        boxOnClick(excursion.id);
                      }}
                      value={excursion.id}
                      key={excursion.id}
                    >
                      <h3 className="text-left text-3xl">{excursion.name}</h3>
                      <span className="text-l pt-2 pb-2">${excursion.price}</span>
                      <img className="w-[100%] h-56 max-h-56 min-h-48 rounded object-cover" src={excursion.image} alt={excursion.name} onClick={(e)=>{
                        boxOnClick(excursion.id);
                      }} />
                      <span className="pb-5 pt-5">{adjustTime(excursion.time)}</span>

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
