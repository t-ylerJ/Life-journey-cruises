import { json } from '@remix-run/node'

import BigPicture from '../components/BigPicture'
import Testimonials from '../components/Testimonials'
import VoyageTiles from '../components/VoyageTiles'
import redirectCookie from '~/utils/redirectCookie'

export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async ({ request }) => {
  const pathName = new URL(request.url).pathname
  return json(null, {
    headers:
      pathName === '/'
        ? {
            'Set-Cookie': await redirectCookie.serialize('/'),
          }
        : {},
  })
}

export default function Index() {
  return (
    <>
      <BigPicture />
      <VoyageTiles />
      <Testimonials />
    </>
  )
}
