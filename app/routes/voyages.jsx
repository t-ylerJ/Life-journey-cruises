import { json, Link, Outlet } from '@remix-run/react'
import SubHeader from '~/components/SubHeader.jsx'
import redirectCookie from '../utils/redirectCookie'

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

    <SubHeader/>
      <Outlet />
    </>
  )
}

export default voyages
