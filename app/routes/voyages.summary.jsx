import PurchaseSummary from '../components/PurchaseSummary';
import PaymentSummary from '../components/PaymentSummary';

const Summary = () => {
  return (<div>
    <h1>Thank You for Your Purchase!</h1>
    <h2>We're Looking Forward to Your Cruise!</h2>
    <PurchaseSummary />
    <PaymentSummary />
  </div>)
}

export default Summary;