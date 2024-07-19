import {
  Form,
  json,
  redirect,
  useActionData,
  useLoaderData,
} from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { supabaseServer } from '~/utils/supabase'
import redirectCookie from '~/utils/redirectCookie'

export const meta = () => {
  return [
    { title: `Account | Life Journey Cruises` },
    { name: 'description', content: 'Life Journey Cruises' },
  ]
}

export const loader = async ({ request }) => {
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user)
    throw redirect('/login', {
      headers: {
        'Set-Cookie': await redirectCookie.serialize('/account'),
      },
    })
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
  return true
}

const Account = () => {
  const { user, profile } = useLoaderData() ?? {}
  // console.log(user, profile)
  const submitted = useActionData()

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
        <fieldset>
          <legend>Personal</legend>
          <label>
            First Name:
            <input
              name="first_name"
              placeholder="First Name"
              className="form-input"
            />
          </label>
          <label>
            Last Name:
            <input
              name="last_name"
              placeholder="Last Name"
              className="form-input"
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="birthday"
              placeholder="Date of Birth"
              className="form-input"
            />
          </label>
          <label>
            Passport Number:
            <input
              name="passport"
              placeholder="Passport Number"
              className="form-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Address:</legend>
          <label>
            Street address:
            <input name="street" placeholder="Address" className="form-input" />
          </label>
          <label>
            City:
            <input name="city" placeholder="City" className="form-input" />
          </label>
          <label>
            State:
            <input name="state" placeholder="State" className="form-input" />
          </label>
          <label>
            Zip Code:
            <input name="zip" placeholder="Zip Code" className="form-input" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Payment Info</legend>
          <label>
            Name on Card:
            <input
              name="card_name"
              placeholder="Name on Card"
              className="form-input"
            />
          </label>
          <label>
            Card Number:
            <input
              name="card_number"
              placeholder="Card Number"
              className="form-input"
            />
          </label>
          <label>
            Expiration Date:
            <input
              name="expiration"
              placeholder="Expiration"
              className="form-input"
            />
          </label>
          <label>
            CVV:
            <input
              type="number"
              name="cvv"
              placeholder="CVV"
              className="form-input"
            />
          </label>
        </fieldset>
        <button className="button" disabled={submitted}>{`SAVE${
          submitted ? 'D' : ''
        }`}</button>
      </Form>
    </>
  )
}

export default Account
