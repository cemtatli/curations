import { postSiteClient } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

const verifyRecaptcha = async (gRecaptchaToken: string) => {
  const formData = `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gRecaptchaToken}`

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  })

  return response.json()
}

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json()
    const { name, url, keywords, subCategory, gRecaptchaToken } = body
    
    const recaptchaResult = await verifyRecaptcha(gRecaptchaToken)
    if (!recaptchaResult.success) {
      return NextResponse.json({ message: 'Recaptcha doğrulanamadı' }, { status: 200 })
    }

    const newDraftSite = {
      _id: 'drafts.',
      _type: 'draftSites',
      name,
      url,
      keywords,
      subCategory,
    }
    const newBookmark = await postSiteClient.create(newDraftSite)
    return NextResponse.json(newBookmark, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ message: 'Site eklenirken bir sorun oluştu' }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
