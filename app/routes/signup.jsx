import { Form, redirect, useActionData } from '@remix-run/react'
import { createCookie } from '@remix-run/node'
import { useState } from 'react'
import { supabaseClient } from '~/utils/supabase.js'

export const loader = async ({ request }) => {
  const cookie = createCookie('redirect', {
    maxAge: 60 * 60 * 24 * 90,
  })
  console.log(await cookie.serialize({ url: '/' }))
  console.log(request)
  return null
}

export const clientAction = async ({ request }) => {
  const formData = await request.formData()
  const signupInfo = Object.fromEntries(formData)
  // console.log(signupInfo)
  switch (signupInfo.action) {
    case 'signup':
      const { emailSignup, error } = await supabaseClient.auth.signUp({
        email: signupInfo.email,
        password: signupInfo.password,
      })
      if (error) {
        console.log(error)
      } else {
        console.log(emailSignup)
        const { phoneSignup, error } = await supabaseClient.auth.updateUser({
          phone: signupInfo.phone,
        })
        if (error) {
          console.log(error)
        } else {
          console.log(phoneSignup)
          await supabaseClient.auth.signOut()
          return { stage: 'verify', phone: signupInfo.phone }
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
  }
}

const Signup = () => {
  const actionData = useActionData()

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/3 flex flex-col gap-4 p-8 rounded-xl border">
        <Form
          className="flex flex-col gap-4 items-center"
          method="post"
          // onSubmit={handleSubmit}
        >
          {!actionData ? (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="input input-bordered w-full"
              />
              <button
                className="btn btn-primary w-full"
                name="action"
                value="signup"
              >
                SUBMIT
              </button>
            </>
          ) : (
            <>
              <input name="token" className="input input-bordered w-full" />
              <input
                type="hidden"
                name="phone"
                value={actionData.phone ?? ''}
              />
              <button
                className="btn btn-primary w-full"
                name="action"
                value="verify"
              >
                VERIFY
              </button>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}

export default Signup
