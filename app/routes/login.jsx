import { supabaseClient, supabaseServer } from '~/utils/supabase'
import { Form, useActionData, useLoaderData } from '@remix-run/react'

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
      const { signInData, error } =
        await supabaseClient.auth.signInWithPassword(formData)
      if (error) {
        console.log(error)
      } else {
        console.log(signInData)
        if (signInData.session) {
          await supabaseClient.auth.signOut()
          const { otpData, error } = await supabaseClient.auth.signInWithOtp({
            phone: '+15864053722',
          })
          if (error) {
            console.log(error)
          } else {
            console.log(otpData)
          }
        }
      }
      return null
    case 'verify':
      const { verifyResult, verifyError } = await supabaseClient.auth.verifyOtp(
        {
          phone: signupInfo.phone,
          token: signupInfo.token,
          type: 'phone_change',
        }
      )
      if (verifyError) {
        console.log(verifyError)
      } else {
        console.log(verifyResult)
        return redirect('/')
      }
    case 'logout':
      await supabaseClient.auth.signOut()
      return null
    default:
      return null
  }
}

const Login = () => {
  const { user } = useLoaderData()
  const actionData = useActionData()

  return (
    <>
      {user && <span>Logged in as: {user.email}</span>}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/3 flex flex-col gap-4 p-8 rounded-xl border">
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
      </div>
    </>
  )
}

export default Login
