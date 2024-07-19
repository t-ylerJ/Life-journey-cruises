import { Form, Link } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import OTP from './OTP'
import { signup } from '../utils/auth'

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

  const labelStyle = 'invisible w-0 h-0'

  return (
    <>
      {!actionData ? (
        <Form className="flex flex-col gap-4" key={step} method="post">
          {step === 'login' ? (
            <p>Login:</p>
          ) : step === 'signup' ? (
            <p>Sign up:</p>
          ) : null}
          <input
            ref={emailRef}
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            aria-label="email"
            className="form-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={8}
            required
            aria-label="password"
            className="form-input"
          />
          {step === 'signup' ? (
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              minLength={11}
              maxLength={11}
              required
              aria-label="phone"
              className="form-input"
            />
          ) : null}
          <button name="action" value={step} className="button">
            SUBMIT
          </button>
          {
            <p>
              {step === 'signup'
                ? 'Already have an account? Log in '
                : 'New cruiser? Sign up '}
              <Link
                className="underline"
                to={step === 'signup' ? '/login' : '/signup'}
              >
                here.
              </Link>
            </p>
          }
        </Form>
      ) : actionData.verify ? (
        <>
          <Form key="verify" method="post" className="flex flex-col gap-4">
            {/* <input
              ref={verifyRef}
              name="token"
              className="form-input"
            /> */}
            <OTP />
            <input type="hidden" name="phone" value={actionData.phone ?? ''} />
            <input type="hidden" name="redirectURL" value={redirectURL} />
            <button className="button w-full" name="action" value="verify">
              VERIFY
            </button>
          </Form>
        </>
      ) : null}
      {/* <Form method="post">
        <button name="action" value="logout" className="btn btn-primary w-full">
          SIGN OUT
        </button>
      </Form> */}
    </>
  )
}

export default AuthForm
