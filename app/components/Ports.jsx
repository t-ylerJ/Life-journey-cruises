const Ports = ({schedule, clickHandler, setHighlightedPort, hoveredPort}) => {
  const handClickEvent = (e) => {
    e.preventDefault();
    clickHandler(e.target.value);
  }
   // Function for handling mouse enter event
   function handleMouseEnter(portName) {
    // setHighlightedPort(portName);
    hoveredPort.current = portName;
    console.log('cactus');
    console.log('hoveredPort: ', hoveredPort.current);
  }

  // Function for handling mouse leave event
  function handleMouseLeave() {
    // setHighlightedPort('');
    hoveredPort.current = null;
  }

  return (
  <div className="w-2/5">
    {schedule.map((item, index) => {
      const hoverClass = item.day === 1 ?  'hover:bg-orange-300' :'hover:bg-blue-300';
      return (
        <div  key={item.day} className={`rounded-full text-left cursor-pointer p-3 pb-8 ${hoverClass} border-b-2`} type="button" onClick={()=>{clickHandler(item.day)}}  onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} >
          <div data-modal-target="default-modal" data-modal-show="default-modal" className="font-bold b " value={item.day}  onClick={()=>{clickHandler(item.day)}} type="button">Day  {item.day}: {item.portname} </div>
        </div>
      )})}
    </div>
  );


};

export default Ports

