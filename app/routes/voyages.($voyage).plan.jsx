import ExcursionTiles from '../components/ExcursionTiles'
import sql from '~/utils/sql'
import {json} from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { supabaseServer } from '~/utils/supabase'

export const loader = async ({ request }) => {

  const supabase = supabaseServer(request)
  const {data} = await supabase.from('excursions').select('*').eq('voyage_id', 1)

  return json(data)
}

const Plan = () => {
  const data = useLoaderData()
  console.log(data);
  return <ExcursionTiles />
}

export default Plan
