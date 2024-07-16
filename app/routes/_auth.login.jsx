import { json, redirect, useActionData, useLoaderData } from '@remix-run/react'
import { login, loginVerify } from '../utils/auth'
import { supabaseClient, supabaseServer } from '~/utils/supabase'
import redirectCookie from '../utils/redirectCookie'
import AuthForm from '../components/AuthForm'

export const loader = async ({ request }) => {
  const redirectURL = await redirectCookie.parse(request.headers.get('Cookie'))
  console.log(redirectURL)
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) throw redirect(redirectURL)
  return json(
    { redirectURL },
    {
      headers: {
        'Set-Cookie': await redirectCookie.serialize('/'),
      },
    }
  )
}

export const clientAction = async ({ request }) => {
  const requestFormData = await request.formData()
  const formData = Object.fromEntries(requestFormData)
  switch (formData.action) {
    case 'login':
      return await login(formData)
    case 'verify':
      return await loginVerify(formData)
    case 'logout':
      console.log('logging out')
      await supabaseClient.auth.signOut()
      return null
    default:
      return null
  }
}

const Login = () => {
  const actionData = useActionData()
  const { redirectURL } = useLoaderData()

  return (
    <>
      <AuthForm
        step="login"
        redirectURL={redirectURL}
        actionData={actionData}
      />
    </>
  )
}

export default Login
