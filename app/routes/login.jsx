import { supabaseClient, supabaseServer } from '~/utils/supabase'
import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
} from '@remix-run/react'
import redirectCookie from '../utils/redirectCookie'

export const loader = async ({ request }) => {
  const redirectURL = await redirectCookie.parse(request.headers.get('Cookie'))
  console.log(redirectURL)
  const supabase = supabaseServer(request)
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error) {
    console.log(error)
  }
  // console.log(data)
  return json({ user, redirectURL })
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
        // console.log(signInData)
        if (signInData?.session) {
          await supabaseClient.auth.signOut()
          const { otpData, error } = await supabaseClient.auth.signInWithOtp({
            phone: '+15864053722',
          })
          if (error) {
            console.log(error)
          } else {
            // console.log(otpData)
            return { verify: true }
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
        // console.log(verifyResult)
        return redirect(redirectURL)
      }
      return null
    case 'logout':
      console.log('logging out')
      await supabaseClient.auth.signOut()
      return null
    default:
      return null
  }
}

const Login = () => {
  const { user, redirectURL } = useLoaderData()
  const actionData = useActionData()

  return (
    <>
      {user && <span>Logged in as: {user.email}</span>}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/3 flex flex-col gap-4 p-8 rounded-xl border">
          {!actionData ? (
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
          ) : actionData.verify ? (
            <>
              <Form method="post" className="flex flex-col gap-4">
                <input name="token" className="input input-bordered w-full" />
                <input
                  type="hidden"
                  name="phone"
                  value={actionData.phone ?? ''}
                />
                <input type="hidden" name="redirectURL" value={redirectURL} />
                <button
                  className="btn btn-primary w-full"
                  name="action"
                  value="verify"
                >
                  VERIFY
                </button>
              </Form>
            </>
          ) : null}
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
