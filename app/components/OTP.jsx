const OTP = () => {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((v, i) => (
          <input key={i} name="otp" />
        ))}
    </>
  )
}

export default OTP
