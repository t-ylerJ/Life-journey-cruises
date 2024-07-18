import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const PaymentForm = ({ user }) => {
  const [formObj, setFormObj] = useState({});
  const [guestCount, setGuestCount] = useState([]);
  useEffect(() => {
    var guests = Number(JSON.parse(localStorage.getItem('bookingDetails')).guestNumber);
    var tempArr = [];
    for (var i = 0; i < guests; i++) {
      tempArr.push(i);
    }
    setGuestCount(tempArr);
  }, [])
  useEffect(() => {
    localStorage.setItem('payInfo', JSON.stringify(formObj));
  }, [formObj])
  return (<div className="block mr-75px w-96 p-2 float-right border-2 border-gray-100 rounded">
    <form id="payment">
    {
      guestCount.map((item, index) => {
        return (<div key={item}>
            <p className="ml-5 mt-5">Guest {index + 1} First Name:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index} required={true}></input>
            <p className="ml-5 mt-5">Guest {index + 1} Last Name:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index} required={true}></input>
            <p className="ml-5 mt-5">Guest {index + 1} Passport Number:</p>
            <input className="border-2 w-80 mx-5 rounded" name={index} required={true}></input>
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
    </form>
    <Link to="/voyages/summary">
    <button className="w-80 mx-5 my-8 p-2 rounded bg-primary" onClick={() => {
      var paymentData = new FormData(document.getElementById('payment'));
      var values = paymentData.getAll('pay');
      var keys = ['card_number', 'cvv', 'expiration', 'card_name', 'street', 'city', 'state', 'zip'];
      var outObj = {};
      for (var i = 0; i < values.length; i++) {
        outObj[keys[i]] = values[i];
      }
      var guestArr = [];
      for (var j = 0; j < guestCount.length; j++) {
        var guestValues = paymentData.getAll(j);
        var tempObj = {
          'first_name': guestValues[0],
          'last_name': guestValues[1],
          'passport': guestValues[2]
        }
        guestArr.push(tempObj)
      }
      outObj[`guests`] = guestArr;
      setFormObj(outObj);
    }}>Submit</button>
  </Link>
  </div>)
}

export default PaymentForm
