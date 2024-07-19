import PaymentForm from '../components/PaymentForm'
import PurchaseSummary from '../components/PurchaseSummary'
import { supabaseServer } from '~/utils/supabase'
import redirectCookie from '~/utils/redirectCookie'
import { json, redirect, useLoaderData } from '@remix-run/react'

export const loader = async ({ request }) => {
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user)
    throw redirect('/login', {
      headers: {
        'Set-Cookie': await redirectCookie.serialize('/checkout'),
      },
    })
  const { data: profiles } = await supabase
    .from('profiles')
    .select()
    .eq('user_id', user.id)
  return json({ user, profile: profiles[0] })
}

export const meta = () => {
  return [
    { title: `Checkout | Life Journey Cruises` },
    { name: 'description', content: 'Life Journey Cruises' },
  ]
}

const Checkout = () => {
  const { profile } = useLoaderData() ?? {};
  return (
    <div className="w-100% block mx-10 min-w-[860px] mt-12">
      <PurchaseSummary />
      <PaymentForm user={profile}/>
    </div>
  )
}

export default Checkout
