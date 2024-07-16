import { Form, json, redirect, useLoaderData } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { supabaseServer } from '~/utils/supabase'

export const loader = async ({ request }) => {
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) throw redirect('/')
  const { data: profiles } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', user.id)
  return json({ user, profile: profiles[0] })
}

export const action = async ({ request }) => {
  const supabase = supabaseServer(request)
  const requestFormData = await request.formData()
  // console.log(requestFormData)
  const formData = Object.fromEntries(requestFormData)
  for (let [key, value] of Object.entries(formData)) {
    if (!value) {
      formData[key] = null
    }
  }
  // console.log(formData)
  await supabase.from('profiles').upsert(formData, { onConflict: 'user_id' })
  return null
}

const Account = () => {
  const { user, profile } = useLoaderData()
  // console.log(user, profile)

  const formRef = useRef()

  useEffect(() => {
    if (user) {
      formRef.current.user_id.value = user.id
    }
    if (profile) {
      formRef.current.first_name.value = profile.first_name
      formRef.current.last_name.value = profile.last_name
      formRef.current.birthday.value = profile.birthday
        ? new Date(profile.birthday).toLocaleDateString('en-CA')
        : ''
      formRef.current.passport.value = profile.passport
      formRef.current.card_number.value = profile.card_number
      formRef.current.expiration.value = profile.expiration
      formRef.current.card_name.value = profile.card_name
      formRef.current.cvv.value = profile.cvv
      formRef.current.street.value = profile.street
      formRef.current.city.value = profile.city
      formRef.current.state.value = profile.state
      formRef.current.zip.value = profile.zip
    }
  }, [user, profile])

  return (
    <>
      <Form
        className="flex flex-col gap-4"
        ref={formRef}
        key="details"
        method="post"
      >
        <input type="hidden" name="user_id" />
        <input
          name="first_name"
          placeholder="First Name"
          className="input input-bordered"
        />
        <input
          name="last_name"
          placeholder="Last Name"
          className="input input-bordered"
        />
        <input
          type="date"
          name="birthday"
          placeholder="Date of Birth"
          className="input input-bordered"
        />
        <input
          name="passport"
          placeholder="Passport Number"
          className="input input-bordered"
        />
        <input
          name="card_number"
          placeholder="Card Number"
          className="input input-bordered"
        />
        <input
          name="expiration"
          placeholder="Card Number"
          className="input input-bordered"
        />
        <input
          name="card_name"
          placeholder="Name on Card"
          className="input input-bordered"
        />
        <input
          type="number"
          name="cvv"
          placeholder="CVV"
          className="input input-bordered"
        />
        <input
          name="street"
          placeholder="Address"
          className="input input-bordered"
        />
        <input
          name="city"
          placeholder="City"
          className="input input-bordered"
        />
        <input
          name="state"
          placeholder="State"
          className="input input-bordered"
        />
        <input
          name="zip"
          placeholder="Zip Code"
          className="input input-bordered"
        />
        <button className="btn btn-primary">SAVE</button>
      </Form>
    </>
  )
}

export default Account
