import Map from '~/components/Map'
import PortDetails from '~/components/PortDetails'
import Ports from '~/components/Ports'
import {json } from '@remix-run/node'
import sql from '~/utils/sql'
import { useLoaderData } from '@remix-run/react'
import {useState, useEffect, useRef} from 'react'

export const loader = async ({ params }) => {
  try {
  const voyageId = params.voyage;
  const voyageData = await sql`select
                            vp.day,
                            p.name as portname,
                            p.description AS portdescription,
                            p.photo,
                            array_agg(DISTINCT ev.name) as events,
                            array_agg(DISTINCT e.name) as excursions
                          from voyage_ports as vp
                          join ports as p on vp.port_id = p.id
                          left join voyage_events as ve on ve.voyage_id = vp.voyage_id and ve.day = vp.day
                          left join excursions as e on vp.voyage_id = e.voyage_id and e.port_id = vp.port_id
                          left join events as ev on ve.event_id = ev.id
                          where vp.voyage_id = ${voyageId}
                          group by vp.day, p.name, p.description, p.photo
                          order by vp.day`

  const mapData = await sql`
      SELECT
        m.id,
        m.center_lat,
        m.center_long,
        m.zoom,
        jsonb_agg(DISTINCT jsonb_build_object('id', p.id, 'lat', p.lat, 'long', p.long, 'name', p.name)) as ports
      FROM
        maps m
      JOIN
        voyage_ports vp ON m.voyage_id = vp.voyage_id
      JOIN
        ports p ON vp.port_id = p.id
      WHERE
        m.voyage_id = ${voyageId} -- Filter by the dynamic voyageId
      GROUP BY
        m.id;
    `;

  return json({ voyageData, mapData, mapboxAccessToken: process.env.MAPBOX_ACCESS_TOKEN || null});
} catch (error) {
  console.error("Error in loader:", error);
  throw json({error:error.message}, {status:500});
}
};


const Voyages = () => {
  const [eventsAndExcursions, setEventsAndExcursions] = useState([]);
  const [events, setEvents] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [isPortClicked, setIsPortClicked] = useState(false);
  const [photo, setPhoto] = useState('');
  const [description, setDescription] = useState('');
  const [highlightedPort, setHighlightedPort] = useState('');
  const { voyageData, voyageId, mapData, error, mapboxAccessToken} = useLoaderData();
  const hoveredPort = useRef(null);

  useEffect(() => {
    setEventsAndExcursions([...voyageData]);
  }, [voyageData]);

  const handleClose = () => {
    setIsPortClicked(false);
  }

  const handleClick = (day) => {

    const daySchedule = eventsAndExcursions.find((event) => parseInt(event.day) === parseInt(day));
    setEvents([...(daySchedule.events)]);
    setExcursions([...daySchedule.excursions]);
    setDescription(daySchedule.portdescription);
    setPhoto(daySchedule.photo);
    setIsPortClicked(true);
  }

  return (
    <div className='flex flex-col space-x-4 h-[calc(100vh-15rem)]'>
    <div className="grid grid-cols-3 gap-4 flex-grow">
      <Ports schedule={eventsAndExcursions} clickHandler={handleClick} setHighlightedPort={setHighlightedPort} hoveredPort={hoveredPort} />
      <div className="h-full col-span-2 p-4">
      {!isPortClicked ? (
        <>
          {mapboxAccessToken ? (
          <Map mapData={mapData[0]} mapboxAccessToken={mapboxAccessToken} highlightedPort={highlightedPort} hoveredPort={hoveredPort} /> /* Pass data as prop */
          ) : (
            <div className='map-error font-bold bg-red-600 p-2'>Mapbox access token is missing!</div>
          )}
          </>
        ) : (
        <PortDetails description={description} photo={photo} events={events} excursions={excursions} isPortClicked = {isPortClicked} closeHandler={handleClose}/>
      )}
      </div>
      </div>
    </div>
  )
}

export default Voyages;