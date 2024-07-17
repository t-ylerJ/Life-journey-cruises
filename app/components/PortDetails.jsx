
const PortDetails = ({ events, excursions, closeHandler,photo,description}) => {
  const closeModal = () => {
    closeHandler();
    // Remove the extra closing curly brace
  }
    // if (!open) return null;

    return (
      <div className = "container md">
        <div className="md:container  md:mx-auto mb-20 ">
          <button onClick={closeModal} className = "float-right cursor-pointer">X</button>
        </div>
        <div>
            <img src = {photo} alt = "City Look"/>
             <p >{description}</p>
        </div>
        <div className = "grid grid-cols-2">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Event during the curise
          </h4>
          <div><ul >
          {events ? events.map((event) =>
            (

                <li key={event.id}>{event}</li>

            )
          ) : null}
          </ul>
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
            Excursions at the port
          </h4>
          {excursions ? excursions.map(excursion =>
            (
              <ul key={excursion.id}>
                <li>{excursion}</li>
              </ul>
            )
          ) : null}
        </div>
        </div>
      </div>
    );
};

export default PortDetails;
