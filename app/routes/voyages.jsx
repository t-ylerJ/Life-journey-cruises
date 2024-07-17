import { json, Link, Outlet } from '@remix-run/react'
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
      <div>
        Subheader
        <Link to={`alaska/plan`}>
          <button>Plan</button>
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default voyages
