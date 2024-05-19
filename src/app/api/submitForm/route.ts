import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await new Response(req.body).text()
  const jsonData = JSON.parse(data)
  const body = JSON.stringify({ ...jsonData })
  const host = req.headers.get('host')

  if (body === '{}')
    return NextResponse.json({
      success: false,
      message: 'Invalid request body',
      code: 400
    })
  if (
    host !== 'smartfleetfunding.com' &&
    host !== 'www.smartfleetfunding.com' &&
    host !== 'localhost:3000'
  )
    return NextResponse.json({
      success: false,
      message: 'Unauthorized',
      code: 401
    })

  const response = await fetch(
    'https://flow.zoho.com/785473680/flow/webhook/incoming?zapikey=1001.1efe7f16cde72a5dc615d742476cc36e.fe77873c5c71e0bc95b7b8bb11dddbb8&isdebug=false',
    {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return NextResponse.json({ success: true, message: 'Form sent', code: 200 })
}
