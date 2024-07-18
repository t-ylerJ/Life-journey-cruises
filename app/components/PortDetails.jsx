import { IoIosCloseCircleOutline } from "react-icons/io";

const PortDetails = ({ events, excursions, closeHandler, photo, description }) => {
  const closeModal = () => {
    closeHandler();
  };

  return (
    <div className="container mx-auto p-4 max-w-full">
      <div className="mb-1 flex justify-end">
        <button onClick={closeModal} className="cursor-pointer p-2">
          <IoIosCloseCircleOutline className="text-3xl text-gray-950" />
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:flex-grow">
          <img src={photo} alt="City Look" className="w-full lg:h-96 object-cover rounded-xl" />
          <p className="mt-4 text-center leading-normal">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-justify mt-4">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Event during the cruise
          </h1>
          <ul>
            {events ? events.map((event, index) => (
              <li key={index}>{event}</li>
            )) : null}
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Excursions at the port
          </h1>
          {excursions ? excursions.map((excursion, index) => (
            <ul key={index}>
              <li>{excursion}</li>
            </ul>
          )) : null}
        </div>
      </div>
    </div>
  );
};

export default PortDetails;
