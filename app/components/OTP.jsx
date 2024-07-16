import { useEffect, useRef, useState } from 'react'

const OTP = () => {
  const [input, setInput] = useState({})

  const refs = useRef({})

  const handleChange = (e, i) => {
    setInput((current) => ({
      ...current,
      [i]: e.target.value,
    }))
    refs.current[i + 1]?.focus()
  }

  useEffect(() => {
    refs.current[0]?.focus()
  }, [])

  return (
    <>
      {/* <div className="w-full h-full"> */}
      <div className="w-full grid grid-cols-6 gap-4">
        {Array(6)
          .fill(0)
          .map((v, i) => (
            <input
              key={i}
              name={i}
              ref={(node) => (refs.current[i] = node)}
              value={input[i] ?? ''}
              maxLength={1}
              onChange={(e) => handleChange(e, i)}
              inputMode="numeric"
              pattern="[0-9]"
              className="form-input"
            />
          ))}
        <input
          type="hidden"
          name="token"
          value={Object.values(input).join('')}
          onChange={() => {}}
        />
        {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
      </div>
      {/* </div> */}
    </>
  )
}

export default OTP
