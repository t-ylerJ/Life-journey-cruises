const Ports = ({schedule, clickHandler}) => {
  const handClickEvent = (e) => {
    e.preventDefault();
    clickHandler(e.target.value);
  }
  return <div className="w-full">
    {schedule.map((item) => {
      const hoverClass = item.day === 1 ?  'hover:bg-secondary/30' :'hover:bg-blue-300/30';
      return (
        <div  key={item.day} className={`text-left divide-y cursor-pointer p-3 pb-8 ${hoverClass} border-b-2`} type="button" onClick={()=>{clickHandler(item.day)}}>
          <button data-modal-target="default-modal" data-modal-show="default-modal" className="font-bold b " value={item.day}  onClick={handClickEvent} type="button">Day  {item.day}: {item.portname} </button>
        </div>
      )
    })}
  </div>
}

export default Ports

