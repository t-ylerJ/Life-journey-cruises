import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const PaymentForm = ({ user }) => {
  var userKeys = [
    'card_name',
    'card_number',
    'cvv',
    'expiration',
    'street',
    'city',
    'state',
    'zip',
  ]
  userKeys.map((key) => {
    if (!user[key]) {
      user[key] = ''
    }
  })
  const [formObj, setFormObj] = useState({})
  const [guestCount, setGuestCount] = useState([])
  useEffect(() => {
    var guests = Number(
      JSON.parse(localStorage.getItem('bookingDetails')).guestNumber
    )
    var tempArr = []
    for (var i = 0; i < guests; i++) {
      tempArr.push(i)
    }
    setGuestCount(tempArr)
  }, [])
  useEffect(() => {
    localStorage.setItem('payInfo', JSON.stringify(formObj))
  }, [formObj])
  return (
    <div className="block p-2 border-2 border-gray-100 rounded flex flex-col items-center max-w-[600px] w-full">
      <form id="payment" className="flex flex-col gap-4 px-4 w-full">
        <fieldset>
          <legend>Guest Info</legend>
          {guestCount.map((item, index) => {
            return (
              <div key={item}>
                <p className="">Guest {index + 1} First Name:</p>
                <input
                  className="form-input"
                  name={index}
                  required={true}
                ></input>
                <p className="">Guest {index + 1} Last Name:</p>
                <input
                  className="form-input"
                  name={index}
                  required={true}
                ></input>
                <p className="">Guest {index + 1} Passport Number:</p>
                <input
                  className="form-input"
                  name={index}
                  required={true}
                ></input>
              </div>
            )
          })}
        </fieldset>
        <fieldset className="">
          <legend>Card Info</legend>
          <p className=" ">Name on the Card:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.card_name}
            required={true}
          ></input>
          <p className=" ">Card Number:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.card_number}
            required={true}
          ></input>
          <p className=" ">CVV:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.cvv}
            required={true}
          ></input>
          <p className=" ">Expiration:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.expiration}
            required={true}
          ></input>
        </fieldset>
        <fieldset className="">
          <legend>Billing Info</legend>
          <p className=" ">Billing Address:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.street}
            required={true}
          ></input>
          <p className=" ">City:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.city}
            required={true}
          ></input>
          <p className=" ">State:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.state}
            required={true}
          ></input>
          <p className=" ">Zip:</p>
          <input
            className=" form-input"
            name="pay"
            defaultValue={user.zip}
            required={true}
          ></input>
        </fieldset>
      </form>
      <Link to="/voyages/summary">
        <button
          className="w-80 mt-4 mx-auto button"
          onClick={() => {
            var paymentData = new FormData(document.getElementById('payment'))
            var values = paymentData.getAll('pay')
            var keys = [
              'card_number',
              'cvv',
              'expiration',
              'card_name',
              'street',
              'city',
              'state',
              'zip',
            ]
            var outObj = {}
            for (var i = 0; i < values.length; i++) {
              outObj[keys[i]] = values[i]
            }
            var guestArr = []
            for (var j = 0; j < guestCount.length; j++) {
              var guestValues = paymentData.getAll(j)
              var tempObj = {
                first_name: guestValues[0],
                last_name: guestValues[1],
                passport: guestValues[2],
              }
              guestArr.push(tempObj)
            }
            outObj[`guests`] = guestArr
            setFormObj(outObj)
          }}
        >
          Submit
        </button>
      </Link>
    </div>
  )
}

export default PaymentForm
