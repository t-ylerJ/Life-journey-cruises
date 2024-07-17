
const PortDetails = ({ events, excursions, closeHandler }) => {
  const closeModal = () => {
    closeHandler();
    // Remove the extra closing curly brace
  }
    // if (!open) return null;

    return (
      <div className = "columns-2">
        <div className="md:container  md:mx-auto mb-20 ">
          <button onClick={closeModal} className = "float-right cursor-pointer">X</button>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Event during the curise
          </h4>
          {events ? events.map((event) =>
            (<div>
              <ul key={event.id}>
                <li>{event}</li>
              </ul>
            </div>)
          ) : null}
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Excursions at the port
          </h4>
          {excursions ? excursions.map(excursion =>
            (<div>
              <ul key={excursion.id}>
                <li>{excursion}</li>
              </ul>
            </div>)
          ) : null}
        </div>
      </div>
    );
};

export default PortDetails;
