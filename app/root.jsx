import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  redirect,
  useRouteError,
  useRouteLoaderData,
} from '@remix-run/react'
import './tailwind.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Error from '~/components/Error'
import AIssistant from '~/components/AIssistant.jsx'
import { supabaseServer, supabaseClient } from '~/utils/supabase'
import cookie from 'cookie'

export const loader = async ({ request }) => {
  // console.log('hi');
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  // console.log(user);
  return json({ user: user ?? null, openai: process.env.OPENAI_KEY ?? null })
}
export const clientAction = async () => {
  await supabaseClient.auth.signOut()
  const cookies = cookie.parse(document.cookie)
  let redirectURL = atob(cookies.redirect)
  redirectURL = redirectURL.slice(1, redirectURL.length - 1)
  return new Response(null, {
    status: 303,
    headers: {
      Location: redirectURL,
    },
  })
}
export function Layout({ children }) {
  const { user, openai } = useRouteLoaderData('root') ?? {}
  // console.log(useLoaderData());
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg"></link>
        <Meta />
        <Links />
      </head>
      <body className="relative flex flex-col">
        <Header user={user} />
        <main className="flex-grow">{children}</main>
        <ScrollRestoration />
        <Scripts />
        <Footer />

        {openai && <AIssistant />}
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <Error />
    </>
  )
}
