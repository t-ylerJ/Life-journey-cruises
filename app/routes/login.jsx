import { useEffect, useState } from 'react'
import supabase from '~/utils/supabase'
import { Form } from '@remix-run/react'

export const clientAction = async ({ request }) => {
  const formData = await request.formData
  const loginDetails = Object.fromEntries(formData)
  const { data, error } = await supabase.auth.signInWithPassword(loginDetails)
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
}

const Login = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      console.log(data)
      if (data.session?.user) {
        setUser(data.session.user.email)
      }
    }
    getUser()
  }, [])

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      {user && <span>Logged in as: {user}</span>}
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
        <button className="btn btn-primary">SUBMIT</button>
      </Form>
      <button className="btn btn-primary" onClick={signOut}>
        SING OUT (SOLSTICE BELLS)
      </button>
    </>
  )
}

export default Login
