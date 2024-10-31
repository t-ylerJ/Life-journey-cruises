const Ports = ({ schedule, clickHandler, setHighlightedPort, hoveredPort }) => {
  const handClickEvent = (e) => {
    e.preventDefault()
    clickHandler(e.target.value)
  }

  function handleMouseEnter(portName) {
    setHighlightedPort(portName);
    hoveredPort.current = portName
    console.log('hoveredPort: ', hoveredPort.current)
  }

  function handleMouseLeave() {
    setHighlightedPort('');
    hoveredPort.current = null
  }

  return (
    <div className="w-full">
      {schedule.map((item, index) => {
        const hoverClass =
          item.day === 1 ? 'hover:bg-orange-300' : 'hover:bg-blue-300'
        return (
          <div
            key={item.day}
            className={`text-3xl text-left cursor-pointer p-3 pb-8 ${hoverClass} border-b-2`}
            type="button"
            onClick={() => {
              clickHandler(item.day)
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div
              data-modal-target="default-modal"
              data-modal-show="default-modal"
              className="font-bold b "
              value={item.day}
              onClick={() => {
                clickHandler(item.day)
              }}
              type="button"
            >
              Day {item.day}: {item.portname}{' '}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Ports
