
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
   // nest all the data into one object and store it in local storage
   /*
    const booking = localStorage.getItem('bookingDetails');
    if(booking){
      setSelectedExcursions(JSON.parse(booking).excursions);
      const ids = JSON.parse(booking).excursions.map((exc) => exc.id);
      setClickedBoxes([...ids]);
    }
    */
  },[]);


  const boxOnClick = (excursionId) => {

    if(clickedBoxes.includes(parseInt(excursionId))) {
      setClickedBoxes(clickedBoxes.filter((box) => box !== parseInt(excursionId)));
      setSelectedExcursions(selectedExcursions.filter((exc) => parseInt(exc.id) !== parseInt(excursionId)));
      //// nest all the data into one object and store it in local storage
      /*
      const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails'));
      bookingDetails.excursions = bookingDetails.excursions.filter((exc) => parseInt(exc.id) !== parseInt(excursionId));
      localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails)); */

      localStorage.setItem('excursions', JSON.stringify(selectedExcursions.filter((exc) => parseInt(exc.id) !== parseInt(excursionId))));
    } else {
      setClickedBoxes([...clickedBoxes, parseInt(excursionId)]);
      for(let i = 0; i < dailyExcursions.length; i++){
        dailyExcursions[i].excursions.forEach((excursion) => {
          if(parseInt(excursion.id) === parseInt(excursionId)){
            const {id, name, price} = excursion;
            // nest all the data into one object and store it in local storage
           /* const bookingDetails = JSON.parse(localStorage.getItem('bookingDetails')) || {};
            bookingDetails.excursions = [...selectedExcursions, {"id": id, "name": name, "price": price}];
            localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails)); */

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

      <div className="w-full flex bg-gray-100 flex-col justify-center items-center overflow-hidden md:p-10 p-4 m-0"  >
        {dailyExcursions && dailyExcursions.map((daily) => {
          return(
            <div key={daily.day} className=" w-full p-0 m-0 rounded-lg shadow-lg border-overflow-hidden border-2 border-inherit bg-white justify-around text-center mb-4"  >
              <div className="w-full pt-5" >
                <h1 className="text-2xl md:text-3xl font-bold" >Day: {daily.day}</h1>
                <h2 className="text-2xl md:text-3xl p-5 md:p-2">Port: {daily.portname}</h2>
              </div>
              <div className="flex flex-wrap justify-start xl:justify-around" >
              {
                daily.excursions && daily.excursions.map((excursion) => {
                  return (
                    <button
                      className={
                        clickedBoxes.includes(parseInt(excursion.id))
                        ?
                        "w-[46%] md:w-[31.5%] xl:w-[17%] h-60 md:h-96 flex items-left flex-col bg-accent text-white border-2 p-3 md:p-5 mb-2 md:mb-10 md:ml-3 m-3 rounded-xl"
                        :
                        "w-[46%] md:w-[31.5%] xl:w-[17%] h-60 md:h-96 flex items-left flex-col bg-gray-100 border-2 p-3 md:p-5 mb-2 md:mb-10 md:ml-3 ml-3 rounded-xl"
                      }
                      onClick={()=>{
                        boxOnClick(excursion.id);
                      }}
                      value={excursion.id}
                      key={excursion.id}
                    >
                      <h3 className="text-left text-lg md:text-3xl">{excursion.name}</h3>
                      <span className="text-sm md:text-l pt-1 md:pt-2  pb-1 md:pb-2">${excursion.price}</span>
                      <img className="w-full h-32 md:h-56 max-h-32 md:max-h-56 min-h-24 md:min-h-48 rounded object-cover" src={excursion.image} alt={excursion.name} onClick={(e)=>{
                        boxOnClick(excursion.id);
                      }} />
                      <span className="pb-1 md:pb-5 pt-1 md:pt-5">{adjustTime(excursion.time)}</span>

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
