/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import {
  Link,
  Form,
  useNavigate,
  useLocation,
  useMatches,
} from '@remix-run/react'

const SubHeader = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()
  const [nextPath, setNextPath] = useState()
  const [next, setNext] = useState()
  const [prevPath, setPrevPath] = useState()
  const [prev, setPrev] = useState()
  const [voyageStep, setVoyageStep] = useState('step')
  const [planStep, setPlanStep] = useState('step')
  const [bookStep, setBookStep] = useState('step')
  const [checkoutStep, setCheckoutStep] = useState('step')
  const [checkoutPrevPath, setCheckoutPrevPath] = useState()
  const [checkoutPrevName, setCheckoutPrevName] = useState()

  //if path ends in number,
  //next button should be plan
  //if path ends in plan,
  //back button should remove /plan
  //next button should remove /plan and add /book
  //if path ends in book
  //back button should remove /book and add /plan
  //next button should remove everything and add /book
  useEffect(() => {
    if (
      !isNaN(
        location.pathname.split('/')[location.pathname.split('/').length - 1]
      )
    ) {
      setVoyageStep('step step-primary')
      setPlanStep('step')
      setBookStep('step')
      setCheckoutStep('step')
      setNextPath(location.pathname + '/plan')
      setNext('Plan')
      setPrev()
    } else if (location.pathname.includes('plan')) {
      setVoyageStep('step step-primary')
      setPlanStep('step step-primary')
      setBookStep('step')
      setCheckoutStep('step')
      setNextPath(
        location.pathname.split('/').slice(0, -1).concat('book').join('/')
      )
      setPrevPath(location.pathname.split('/').slice(0, -1).join('/'))
      setPrev('Voyage')
      setNext('Book')
    } else if (location.pathname.includes('book')) {
      setVoyageStep('step step-primary')
      setPlanStep('step step-primary')
      setBookStep('step step-primary')
      setCheckoutStep('step')
      setNextPath(
        location.pathname.split('/').slice(0, -2).concat('checkout').join('/')
      )
      setPrevPath(
        location.pathname.split('/').slice(0, -1).concat('plan').join('/')
      )
      setCheckoutPrevPath(location.pathname)
      setCheckoutPrevName('Book')

      setNext('Checkout')
      setPrev('Plan')
    } else if (location.pathname.includes('checkout')) {
      setVoyageStep('step step-primary')
      setPlanStep('step step-primary')
      setBookStep('step step-primary')
      setCheckoutStep('step step-primary')
      setNext()
      setPrev(checkoutPrevName)
      setPrevPath(checkoutPrevPath)
    }
  }, [location])

  return (
    <div>
      <div className="flex justify-between items-center p-4 w-full">
        {prev ? (
          <Link to={prevPath} className="btn btn-outline mr-2">
            Back to: {prev}
          </Link>
        ) : (
          <div></div>
        )}

        <ul className="steps steps-horizontal">
          <li className={voyageStep}>Voyage</li>
          <li className={planStep}>Plan</li>
          <li className={bookStep}>Book</li>
          <li className={checkoutStep}>Checkout</li>
        </ul>
        {next ? (
          <Link to={nextPath} className="btn btn-outline ml-2">
            {next}
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default SubHeader
