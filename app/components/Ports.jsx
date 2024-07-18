const Ports = ({schedule, clickHandler}) => {
  const handClickEvent = (e) => {
    e.preventDefault();
    clickHandler(e.target.value);
  }
  return <div className="w-2/5">
    {schedule.map((item) => {
      return (
        <div  key={item.day} className="rounded-full text-left p-3 pb-8 hover:bg-blue-300 border-b-2" type="button">
          <button data-modal-target="default-modal" data-modal-show="default-modal" className="font-bold b " value={item.day}  onClick={handClickEvent} type="button">Day  {item.day}: {item.portname} </button>
        </div>
      )
    })}
  </div>
}

export default Ports

