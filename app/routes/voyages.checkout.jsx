import PaymentForm from '../components/PaymentForm'
import PurchaseSummary from '../components/PurchaseSummary'

export const meta = () => {
  return [
    { title: `Checkout | Life Journey Cruises` },
    { name: 'description', content: 'Life Journey Cruises' },
  ]
}

const Checkout = () => {
  return (
    <div className="w-100% block mx-10 min-w-[860px] mt-12">
      <PurchaseSummary />
      <PaymentForm />
    </div>
  )
}

export default Checkout
