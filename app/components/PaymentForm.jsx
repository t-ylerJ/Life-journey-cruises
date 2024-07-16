import '../tailwind.css';

const PaymentForm = () => {
  return (<div className="block mr-75px w-96 p-2 float-right border-2 border-gray-100 rounded">
    <form>
      <p className="ml-5 mt-5">Card Number:</p>
      <input className="border-2 w-80 mx-5 rounded" name="cardNum"></input>
      <p className="ml-5 mt-2">CVV:</p>
      <input className="border-2 w-80 mx-5 rounded" name="cvv"></input>
      <p className="ml-5 mt-2">Expiration:</p>
      <input className="border-2 w-80 mx-5 rounded" name="expiration"></input>
      <p className="ml-5 mt-2">Name on the Card:</p>
      <input className="border-2 w-80 mx-5 rounded" name="cardNum"></input>
      <p className="ml-5 mt-2">Billing Address:</p>
      <input className="border-2 w-80 mx-5 rounded" name="bAddress"></input>
      <p className="ml-5 mt-2">City:</p>
      <input className="border-2 w-80 mx-5 rounded" name="city"></input>
      <p className="ml-5 mt-2">State:</p>
      <input className="border-2 w-80 mx-5 rounded" name="state"></input>
      <p className="ml-5 mt-2">Zip:</p>
      <input className="border-2 w-80 mx-5 rounded" name="zip"></input>
    </form>
    <button className="w-80 mx-5 my-8 p-2 rounded bg-primary" onClick={() => {
      //submit to somewhere here
    }}>Submit</button>
  </div>)
}

export default PaymentForm
