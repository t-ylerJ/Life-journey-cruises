import React from 'react';

const PaymentSummary = () => {
  const [payInfo, setPayInfo] = React.useState({});
    React.useEffect(() => {
      setPayInfo(JSON.parse(localStorage.getItem('payInfo')));
    }, []);
  const payKeys = Object.keys(payInfo);
  if (payInfo.guests) {
    return (<div className="inline-block float-right w-1/4">
      <h2 className="text-2xl">Guests:</h2>
      {
        payInfo.guests.map((item, index) => {
          return (
            <div key={`guest${index + 1}`}>
              <h3 className="text-xl">Guest {index + 1}:</h3>
              <ul className="list-disc">
                <li>Name: {item.first_name + item.last_name}</li>
                <li>Passport #: {item.passport}</li>
              </ul>
            </div>
          )
        })
      }
      <h2 className="text-2xl">Payment Info:</h2>
      <ul className="list-disc">
      {
        payKeys.map((pKey) => {
          if (pKey !== 'guests') {
            return (<div key={pKey}>
              <li>{pKey}: {payInfo[pKey]}</li>
            </div>)
          }
        })
      }
      </ul>
    </div>)
  }
}

export default PaymentSummary;