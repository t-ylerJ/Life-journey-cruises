import React from 'react';

const PaymentSummary = () => {
  const [payInfo, setPayInfo] = React.useState({});
    React.useEffect(() => {
      setPayInfo(JSON.parse(localStorage.getItem('payInfo')));
    }, []);
  console.log(payInfo);
  const payKeys = Object.keys(payInfo);
  if (payInfo.guests) {
    return (<div>
      <h2>Guests:</h2>
      {
        payInfo.guests.map((item, index) => {
          return (
            <div key={`guest${index + 1}`}>
              <h3>Guest {index + 1}</h3>
              <p>Name: {item.first_name + item.last_name}</p>
              <p>Passport #: {item.passport}</p>
            </div>
          )
        })
      }
      <h2>Payment Info:</h2>
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