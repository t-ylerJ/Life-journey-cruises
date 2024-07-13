import supabase from '~/utils/supabase.js'

const Signup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target))
    console.log(formData)
    const { data, error } = await supabase.auth.signUp({
      ...formData,
    })
    if (error) {
      console.log(error)
    }
    console.log(data)
  }

  return (
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
  )
}

export default Signup
