import { useEffect, useState } from 'react'
import supabase from '~/utils/supabase'

const Login = () => {
  const [user, setUser] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    const { data, error } = await supabase.auth.signInWithPassword(formData)
    if (error) console.log(error)
    console.log(data)
  }

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
      <form
        className="flex flex-col gap-4 items-center"
        method="post"
        onSubmit={handleSubmit}
      >
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
      </form>
      <button className="btn btn-primary" onClick={signOut}>
        SING OUT (SOLSTICE BELLS)
      </button>
    </>
  )
}

export default Login
