import '../tailwind.css';

const PaymentForm = () => {
  var user = {
    card_number: 12345678901234,
    expiration: '07/26',
    card_name: 'Blue Ocean',
    cvv: 675,
    street: '4756 Galvanize Road',
    city: 'San Francisco',
    state: 'CA',
    zip: 94102
  }
  return (<div className="block mr-75px w-96 p-2 float-right border-2 border-gray-100 rounded">
    <form>
      <p className="ml-5 mt-5">Card Number:</p>
      <input className="border-2 w-80 mx-5 rounded" name="card_number" defaultValue={user.card_number}></input>
      <p className="ml-5 mt-2">CVV:</p>
      <input className="border-2 w-80 mx-5 rounded" name="cvv" defaultValue={user.cvv}></input>
      <p className="ml-5 mt-2">Expiration:</p>
      <input className="border-2 w-80 mx-5 rounded" name="expiration" defaultValue={user.expiration}></input>
      <p className="ml-5 mt-2">Name on the Card:</p>
      <input className="border-2 w-80 mx-5 rounded" name="card_name" defaultValue={user.card_name}></input>
      <p className="ml-5 mt-2">Billing Address:</p>
      <input className="border-2 w-80 mx-5 rounded" name="street" defaultValue={user.street}></input>
      <p className="ml-5 mt-2">City:</p>
      <input className="border-2 w-80 mx-5 rounded" name="city" defaultValue={user.city}></input>
      <p className="ml-5 mt-2">State:</p>
      <input className="border-2 w-80 mx-5 rounded" name="state" defaultValue={user.state}></input>
      <p className="ml-5 mt-2">Zip:</p>
      <input className="border-2 w-80 mx-5 rounded" name="zip" defaultValue={user.zip}></input>
    </form>
    <button className="w-80 mx-5 my-8 p-2 rounded bg-primary" onClick={() => {
      //submit to somewhere here
    }}>Submit</button>
  </div>)
}

export default PaymentForm
