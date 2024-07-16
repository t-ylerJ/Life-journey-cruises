import BigPicture from '../components/BigPicture'
import Testimonials from '../components/Testimonials'
import VoyageTiles from '../components/VoyageTiles'
import sql from '../utils/sql.js';
import {useLoaderData} from '@remix-run/react';
import {json} from '@remix-run/react';

export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}


export const loader = async () => {
  try {
    const data = await sql `SELECT * from voyages JOIN voyage_photos ON voyages.id = voyage_photos.voyage_id`;
  return json(data);
  } catch {
    console.log('error in loading fleet data');
  }
};


export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <BigPicture />
      <VoyageTiles voyages={data}/>
      <Testimonials />
    </>
  )
}
