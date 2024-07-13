import { Link, Outlet } from '@remix-run/react'

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
