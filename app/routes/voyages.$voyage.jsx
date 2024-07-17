import Map from '~/components/Map'
import PortDetails from '~/components/PortDetails'
import Ports from '~/components/Ports'
import {json } from '@remix-run/node'
import sql from '~/utils/sql'
import { useLoaderData } from '@remix-run/react'
import {useState, useEffect} from 'react'

export const loader = async ({ params }) => {
  const voyageId = params.voyage;
  const voyageData = await sql`select
                            vp.day,
                            p.name as portname,
                            p.description AS portdescription,
                            array_agg(DISTINCT ev.name) as events,
                            array_agg(DISTINCT e.name) as excursions
                          from voyage_ports as vp
                          join ports as p on vp.port_id = p.id
                          left join voyage_events as ve on ve.voyage_id = vp.voyage_id and ve.day = vp.day
                          left join excursions as e on vp.voyage_id = e.voyage_id and e.port_id = vp.port_id
                          left join events as ev on ve.event_id = ev.id
                          where vp.voyage_id = ${voyageId}
                          group by vp.day, p.name, p.description
                          order by vp.day`

  return json({voyageData})
};

const Voyages = () => {
  const [eventsAndExcursions, setEventsAndExcursions] = useState([]);
  const [events, setEvents] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [isPortClicked, setIsPortClicked] = useState(false);
  const {voyageData} = useLoaderData();
  useEffect(() => {

    if(voyageData[0].portname == voyageData[voyageData.length - 1].portname){
      const lastDay= {...voyageData[voyageData.length - 1], excursions:null};
      setEventsAndExcursions([...(voyageData.slice(0, voyageData.length - 1)), lastDay]);
    }
    setEventsAndExcursions([...voyageData]);
  }, [voyageData]);

  const handleClose = () => {
    setIsPortClicked(false);
  }

  const handleClick = (day) => {

    const daySchedule = eventsAndExcursions.find((event) => parseInt(event.day) === parseInt(day));
    setEvents([...(daySchedule.events)]);
    setExcursions([...daySchedule.excursions]);
    setIsPortClicked(true);
  }

  return (
    <div className="flex">
      < Ports schedule={eventsAndExcursions} clickHandler={handleClick}/>
      {!isPortClicked?
        < Map />
          :
        <PortDetails events={events} excursions={excursions} isPortClicked = {isPortClicked} closeHandler={handleClose}/>
      }
    </div>
  )
}

export default Voyages
