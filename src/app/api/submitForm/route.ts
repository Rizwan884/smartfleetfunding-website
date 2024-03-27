import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await new Response(req.body).text()
  const jsonData = JSON.parse(data)

  const response = await fetch(
    'https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false',
    {
      method: 'POST',
      body: JSON.stringify({ ...jsonData }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  if (response.ok) {
    // eslint-disable-next-line no-console
    console.log('Form submitted successfully')
    // eslint-disable-next-line no-console
    console.log('response status: ' + response.status)
  } else {
    // eslint-disable-next-line no-console
    console.error('Failed to submit form', response)
  }
  return NextResponse.json({ success: true })
}
