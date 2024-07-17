import PaymentForm from '../components/PaymentForm'
import PurchaseSummary from '../components/PurchaseSummary'

const Checkout = () => {
  return (
    <div className="w-100% block mx-10 min-w-[860px] mt-12">
      <PurchaseSummary />
      <PaymentForm />
    </div>
  )
}

export default Checkout
