import { Form } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import OTP from './OTP'

const AuthForm = ({ step, redirectURL, actionData }) => {
  const emailRef = useRef()
  const verifyRef = useRef()

  useEffect(() => {
    if (actionData?.verify) {
      verifyRef.current?.focus()
    } else {
      emailRef.current?.focus()
    }
  }, [actionData])

  return (
    <>
      {!actionData ? (
        <Form className="flex flex-col gap-4" key={step} method="post">
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          {step === 'signup' ? (
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full"
            />
          ) : null}
          <button name="action" value={step} className="btn btn-primary">
            SUBMIT
          </button>
        </Form>
      ) : actionData.verify ? (
        <>
          <Form key="verify" method="post" className="flex flex-col gap-4">
            {/* <input
              ref={verifyRef}
              name="token"
              className="input input-bordered w-full"
            /> */}
            <OTP />
            <input type="hidden" name="phone" value={actionData.phone ?? ''} />
            <input type="hidden" name="redirectURL" value={redirectURL} />
            <button
              className="btn btn-primary w-full"
              name="action"
              value="verify"
            >
              VERIFY
            </button>
          </Form>
        </>
      ) : null}
      <Form method="post">
        <button name="action" value="logout" className="btn btn-primary w-full">
          SIGN OUT
        </button>
      </Form>
    </>
  )
}

export default AuthForm
