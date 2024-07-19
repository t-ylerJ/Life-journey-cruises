import ExcursionTiles from '../components/ExcursionTiles'
import sql from '~/utils/sql'
import {json} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
//import {supabaseServer} from '~/utils/supabase'
import {useState, useEffect} from 'react'
/*
export const loader = async ({ request, params}) => {

  const supabase = supabaseServer(request)

  const {data} = await supabase
    .from('excursions')
    .select().eq('voyage_id', 1)

  return json(data)
}
*/

export const loader = async ({ params }) => {
  const voyageId = params.voyage;
  const data = await sql`select
                            vp.day,
                            p.name as portname,
                            p.description AS portdescription,
                            json_agg(distinct jsonb_build_object(
                            'name', e.name,
                            'price', e.price,
                            'time', e.time,
                            'id', e.id,
                            'image', e.photo
                          )) as excursions
                          from voyage_ports as vp
                          join ports as p on vp.port_id = p.id
                          left join excursions as e on vp.voyage_id = e.voyage_id and e.port_id = vp.port_id
                          where vp.voyage_id = ${voyageId}
                          group by vp.day, p.name, p.description
                          order by vp.day`

   return json({data})
}

const Plan = () => {
  const [excursions, setExcursions] = useState([]);
  const {data}  = useLoaderData()


  useEffect(() => {
    setExcursions([...data.slice(0, data.length - 1)]);
  }, []);

  return <>
    <ExcursionTiles dailyExcursions={excursions} />
  </>
}
export default Plan
