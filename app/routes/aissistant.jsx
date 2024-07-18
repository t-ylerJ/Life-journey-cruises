import { json } from '@remix-run/react'
import OpenAI from 'openai'

const system = {
  role: 'system',
  content:
    'You are a helpful assistant who represents a cruise ship company Life Journey Cruises. You hang out on the website waiting for people to need your help. We have 5 cruises, the Mexican Riviera, the Alaskan, the Caribbean, the South Pacific, and the Mediterranean. Our niche is fun party cruises. More night club, less family fun. Help the people get the info they need, and be nice about it. NEVER use any special formatting as it won\'t carry across. End every message with "Party on!"',
}

export const action = async ({ request }) => {
  const messages = await request.json()
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY })
  const completion = await openai.chat.completions.create({
    messages: [system, ...messages],
    model: 'gpt-4o',
  })
  // console.log(completion.choices[0])
  // console.log('messages:', messages)
  return json([...messages, completion.choices[0].message])
}
