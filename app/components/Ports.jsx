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
    <div className="ports-container">
      {schedule.map((item, index) => (
        <div
          key={item.day}
          className="port-item text-left p-3 m-3 border-b-2 hover:bg-blue-300"
          onClick={() => clickHandler(item.day)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <button
            data-modal-target="default-modal"
            data-modal-show="default-modal"
            className="text-2xl font-bold"
            onClick={handClickEvent}
            type="button"
          >
            Day {item.day}: {item.portname}
          </button>
        </div>
      ))}
    </div>
  );


};

export default Ports

