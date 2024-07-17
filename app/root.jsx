import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import './tailwind.css'
import Header from './components/Header.jsx'
import SubHeader from './components/SubHeader.jsx'
import Error from '~/components/Error'
import AIssistant from '~/components/AIssistant.jsx'
import { supabaseServer, supabaseClient } from '~/utils/supabase'

export const loader = async ({ request }) => {
  // console.log('hi');
  const supabase = supabaseServer(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()
  // console.log(user);
  return json({ user: user ?? null })
}
export const clientAction = async () => {
  await supabaseClient.auth.signOut()
  // console.log('hello');
  return null
}
export function Layout({ children }) {
  const { user } = useLoaderData()
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

        <AIssistant />
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
      <title>Oh no!</title>
      <Error />
    </>
  )
}
