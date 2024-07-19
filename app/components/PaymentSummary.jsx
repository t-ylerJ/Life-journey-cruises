import React from 'react';

const PaymentSummary = () => {
  const [payInfo, setPayInfo] = React.useState({});
    React.useEffect(() => {
      setPayInfo(JSON.parse(localStorage.getItem('payInfo')));
    }, []);
  const payKeys = Object.keys(payInfo);
  if (payInfo.guests) {
    return (<div className="inline-block float-right w-1/4 text-center">
      <h2 className="text-2xl">Guests:</h2>
      {
        payInfo.guests.map((item, index) => {
          return (
            <div key={`guest${index + 1}`}>
              <h3 className="text-xl">Guest {index + 1}:</h3>
              <p>Name: {item.first_name + item.last_name}</p>
              <p>Passport #: {item.passport}</p>
            </div>
          )
        })
      }
      <h2 className="text-2xl">Payment Info:</h2>
      {
        payKeys.map((pKey) => {
          if (pKey !== 'guests') {
            return (<div key={pKey}>
              <p>{pKey}:</p>
              <p>{payInfo[pKey]}</p>
            </div>)
          }
        })
      }
    </div>)
  }
}

export default PaymentSummary;