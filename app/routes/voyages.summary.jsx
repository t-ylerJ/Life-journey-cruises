import PurchaseSummary from '../components/PurchaseSummary';
import PaymentSummary from '../components/PaymentSummary';

const Summary = () => {
  return (<div className="mx-10">
    <h1 className="text-center text-5xl">Thank You for Your Purchase!</h1>
    <h2 className="text-center text-3xl mb-4">We're Looking Forward to Your Cruise!</h2>
    <PurchaseSummary />
    <PaymentSummary />
  </div>)
}

export default Summary;