import ExcursionTiles from '../components/ExcursionTiles'
import sql from '~/utils/sql'
import {json} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {supabaseServer} from '~/utils/supabase'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'



export const loader = async ({ params }) => {
   const data = await sql`select e.id, p.name as portname, e.name, e.time, e.price, e.photo
                          from excursions as e
                          join ports as p on e.port_id = p.id
                          where e.voyage_id = 1`
   return json(data)
}
/*
export const loader = async ({ request, params}) => {

  const supabase = supabaseServer(request)

  const {data} = await supabase
    .from('excursions')
    .select().eq('voyage_id', 1)

  return json(data)
}
*/
const Plan = () => {
  const [excursions, setExcursions] = useState([]);
  const [selectedExcursions, setSelectedExcursions] = useState([]);

  const handleCheckExcursionChange = (event) => {
    const excursionId = event.target.value;
    if (event.target.checked) {
      const selected = excursions.filter((excursion) => excursion.id === excursionId);

      setSelectedExcursions([...selectedExcursions, ...selected]);
    } else {
      const updatedExcursions = selectedExcursions.filter((ex) =>{
        return parseInt(ex.id) !== parseInt(excursionId)
      } );
      setSelectedExcursions(updatedExcursions);
    }
  };
  const data  = useLoaderData()
  useEffect(() => {
    setExcursions([...data]);
  }, [data]);

  return <>
    <Link to={`../book?excursions=${selectedExcursions}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Book</button>
    </Link>
    <ExcursionTiles excursions={excursions} checkChanged={handleCheckExcursionChange}/>
  </>
}
export default Plan
