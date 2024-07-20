import { Outlet } from '@remix-run/react'

const Auth = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[30rem] max-w-full flex flex-col gap-4 p-8 rounded-xl border">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Auth
