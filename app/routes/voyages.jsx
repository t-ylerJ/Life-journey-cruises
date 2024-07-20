import { json, Outlet } from '@remix-run/react'
import SubHeader from '~/components/SubHeader.jsx'
import redirectCookie from '../utils/redirectCookie'

export const meta = ({ params }) => {
  const voyages = {
    1: 'Mexican Riviera',
    2: 'Alaskan',
    3: 'Caribbean',
    4: 'South Pacific',
    5: 'Mediterranean',
  }
  return [
    { title: `${voyages[params.voyage]} | Life Journey Cruises` },
    { name: 'description', content: 'Life Journey Cruises' },
  ]
}

export const loader = async ({ request }) => {
  return json(null, {
    headers: {
      'Set-Cookie': await redirectCookie.serialize(
        new URL(request.url).pathname
      ),
    },
  })
}

const voyages = () => {
  return (
    <>
      <SubHeader />
      <Outlet />
    </>
  )
}

export default voyages
