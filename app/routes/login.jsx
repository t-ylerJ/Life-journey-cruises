import { supabaseClient, supabaseServer } from '~/utils/supabase'
import { Form, useLoaderData } from '@remix-run/react'

export const loader = async ({ request }) => {
  console.log(request.headers)
  const SBServer = supabaseServer(request)
  const { data, error } = await SBServer.auth.getUser()
  if (error) {
    console.log(error)
  }
  console.log(data)
  return { user: data.user }
}

export const clientAction = async ({ request }) => {
  const requestFormData = await request.formData()
  const formData = Object.fromEntries(requestFormData)
  switch (formData.action) {
    case 'login':
      const { data, error } = await supabaseClient.auth.signInWithPassword(
        formData
      )
      if (error) {
        console.log(error)
      } else {
        console.log(data)
      }
      return null
    case 'logout':
      await supabaseClient.auth.signOut()
      return null
    default:
      return null
  }
}

const Login = () => {
  const { user } = useLoaderData()
  // console.log(user)

  return (
    <>
      {user && <span>Logged in as: {user.email}</span>}
      <div className="w-1/3 flex flex-col gap-4">
        <Form className="flex flex-col gap-4" method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <button name="action" value="login" className="btn btn-primary">
            SUBMIT
          </button>
        </Form>
        <Form method="post">
          <button
            name="action"
            value="logout"
            className="btn btn-primary w-full"
          >
            SIGN OUT
          </button>
        </Form>
      </div>
    </>
  )
}

export default Login
