import BigPicture from '../components/BigPicture'
import Testimonials from '../components/Testimonials'
import VoyageTiles from '../components/VoyageTiles'

export const meta = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
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
