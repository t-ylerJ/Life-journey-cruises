const Ports = ({schedule, clickHandler}) => {
  const handClickEvent = (e) => {
    e.preventDefault();
    clickHandler(e.target.value);
  }
  return <div className="w-2/5">
    {schedule.map((item) => {
      const hoverClass = item.day === 1 ?  'hover:bg-orange-300' :'hover:bg-blue-300';
      return (
        <div  key={item.day} className={`rounded-full text-left cursor-pointer p-3 pb-8 ${hoverClass} border-b-2`} type="button" onClick={()=>{clickHandler(item.day)}}>
          <div data-modal-target="default-modal" data-modal-show="default-modal" className="font-bold b " value={item.day}  onClick={()=>{clickHandler(item.day)}} type="button">Day  {item.day}: {item.portname} </div>
        </div>
      )
    })}
  </div>
}

export default Ports

