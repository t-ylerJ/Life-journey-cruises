import { json, redirect, useActionData, useLoaderData } from '@remix-run/react'
import { signup, signupVerify } from '../utils/auth'
import AuthForm from '../components/AuthForm'
import redirectCookie from '../utils/redirectCookie'
import { supabaseServer } from '~/utils/supabase'

export const loader = async ({ request }) => {
  const redirectURL = await redirectCookie.parse(request.headers.get('Cookie'))
  console.log(redirectURL)
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) throw redirect(redirectURL)
  return json({ redirectURL })
}

export const clientAction = async ({ request }) => {
  const requestFormData = await request.formData()
  const formData = Object.fromEntries(requestFormData)
  // console.log(signupInfo)
  switch (formData.action) {
    case 'signup':
      return await signup(formData)
    case 'verify':
      return await signupVerify(formData)
    default:
      return null
  }
}

const Signup = () => {
  const actionData = useActionData()
  const { redirectURL } = useLoaderData()

  return (
    <AuthForm step="signup" redirectURL={redirectURL} actionData={actionData} />
  )
}

export default Signup
