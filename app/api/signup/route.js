import { NextResponse } from 'next/server'
import Airtable from 'airtable'

const base = Airtable.base('app52bsCuwQQbbKyN')

export async function POST(req) {
  const body = await req.json()

  if(!body.email) return NextResponse.json({ message: "Don't be cute. We both know that's not an email" })

  const action = await base('Table 1').create([
    {
      "fields": {
        "Email": body.email,
      }
    },
  ])
 
  return NextResponse.json({ message: "Cool email, bro. Don't get too excited. You probably won't be hearing from us." })
}



