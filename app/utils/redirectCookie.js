import { createCookie } from '@remix-run/node'

const redirectCookie = createCookie('redirect', {
  maxAge: 60 * 60 * 24 * 365,
})

export default redirectCookie
