import {Link} from 'react-router-dom'

const PaymentForm = () => {
  var guests = [
    {
      first_name: 'mama',
      last_name: 'bear',
      passport: 72891341234
    },
    {
      first_name: 'papa',
      last_name: 'bear',
      passport: 12343255234
    }
  ];
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
  var index = 0;
  return (<div className="block mr-75px w-96 p-2 float-right border-2 border-gray-100 rounded">
    <form id="payment" onSubmit={() => {
      var paymentData = new FormData(document.getElementById('payment'));
      var values = paymentData.getAll('pay');
      var keys = ['card_number', 'cvv', 'expiration', 'card_name', 'street', 'city', 'state', 'zip'];
      var outObj = {};
      for (var i = 0; i < values.length; i++) {
        outObj[keys[i]] = values[i];
      }
      for (var j = 0; j < guests.length; j++) {
        var guestValues = paymentData.getAll(j);
        var tempObj = {
          'first_name': guestValues[0],
          'last_name': guestValues[1],
          'passport': guestValues[2]
        }
        outObj[`guest_${j}`] = tempObj;
      }
      console.log(outObj);
    }}>
    {
      guests.map((item) => {
        index++;
        return (<div key={item.first_name}>
            <p className="ml-5 mt-5">Guest {index} First Name:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.first_name} required={true}></input>
            <p className="ml-5 mt-5">Guest {index} Last Name:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.last_name} required={true}></input>
            <p className="ml-5 mt-5">Guest {index} Passport Number:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.passport} required={true}></input>
          </div>)
      })
    }
      <p className="ml-5 mt-5">Card Number:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.card_number} required={true}></input>
      <p className="ml-5 mt-2">CVV:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.cvv} required={true}></input>
      <p className="ml-5 mt-2">Expiration:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.expiration} required={true}></input>
      <p className="ml-5 mt-2">Name on the Card:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.card_name} required={true}></input>
      <p className="ml-5 mt-2">Billing Address:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.street} required={true}></input>
      <p className="ml-5 mt-2">City:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.city} required={true}></input>
      <p className="ml-5 mt-2">State:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.state} required={true}></input>
      <p className="ml-5 mt-2">Zip:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.zip} required={true}></input>
      <Link to="/voyages/summary">
        <button className="w-80 mx-5 my-8 p-2 rounded bg-primary">Submit</button>
      </Link>
    </form>
  </div>)
}

export default PaymentForm
