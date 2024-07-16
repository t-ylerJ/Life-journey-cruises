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
    <form id="guest">
      {
        guests.map((item) => {
          index++;
          return (<div key={item.first_name}>
              <p className="ml-5 mt-5">Guest {index} First Name:</p>
              <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.first_name}></input>
              <p className="ml-5 mt-5">Guest {index} Last Name:</p>
              <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.last_name}></input>
              <p className="ml-5 mt-5">Guest {index} Passport Number:</p>
              <input className="border-2 w-80 mx-5 rounded" name={index - 1} defaultValue={item.passport}></input>
            </div>)
        })
      }
    </form>
    <form id="payment">
      <p className="ml-5 mt-5">Card Number:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.card_number}></input>
      <p className="ml-5 mt-2">CVV:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.cvv}></input>
      <p className="ml-5 mt-2">Expiration:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.expiration}></input>
      <p className="ml-5 mt-2">Name on the Card:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.card_name}></input>
      <p className="ml-5 mt-2">Billing Address:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.street}></input>
      <p className="ml-5 mt-2">City:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.city}></input>
      <p className="ml-5 mt-2">State:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.state}></input>
      <p className="ml-5 mt-2">Zip:</p>
      <input className="border-2 w-80 mx-5 rounded" name="pay" defaultValue={user.zip}></input>
    </form>
    <button className="w-80 mx-5 my-8 p-2 rounded bg-primary" onClick={() => {
      //submit to somewhere here
      var paymentData = new FormData(document.getElementById('payment'));
      var values = paymentData.getAll('pay');
      var keys = ['card_number', 'cvv', 'expiration', 'card_name', 'street', 'city', 'state', 'zip'];
      var outObj = {};
      for (var i = 0; i < values.length; i++) {
        outObj[keys[i]] = values[i];
      }
      var guestData = new FormData(document.getElementById('guest'));
      for (var j = 0; j < guests.length; j++) {
        var guestValues = guestData.getAll(j);
        var tempObj = {
          'first_name': guestValues[0],
          'last_name': guestValues[1],
          'passport': guestValues[2]
        }
        outObj[`guest_${j}`] = tempObj;
      }
      console.log(outObj);
    }}>Submit</button>
  </div>)
}

export default PaymentForm
