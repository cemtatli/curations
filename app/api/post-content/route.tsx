import parseUrl from '@/lib/parse-url'
import { postSiteClient } from '@/sanity/lib/client'
import { checkUrlExists } from '@/sanity/lib/sanity-utils'
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
    const { url, subCategoryId, gRecaptchaToken } = body

    const recaptchaResult = await verifyRecaptcha(gRecaptchaToken)
    if (!recaptchaResult.success) {
      return NextResponse.json({ message: 'Recaptcha doğrulanamadı' }, { status: 200 })
    }

    const parsedUrl = parseUrl(url)

    if (!parsedUrl.isHttps) {
      return NextResponse.json({ message: 'Lütfen https ile başlayan bir url giriniz' }, { status: 200 })
    }

    if (!parsedUrl.domain) {
      return NextResponse.json({ message: 'Lütfen geçerli bir url giriniz' }, { status: 200 })
    }

    if (typeof parsedUrl.domain === 'string') {
      const isSiteExists = await checkUrlExists(parsedUrl.domain)
      if (isSiteExists) {
        return NextResponse.json({ message: 'Site zaten var' }, { status: 200 })
      }
    }

    const newDraftSite = {
      _id: 'drafts.',
      _type: 'draftSites',
      url,
      subCategory: { _type: 'reference', _ref: subCategoryId },
    }
    const newBookmark = await postSiteClient.create(newDraftSite)
    return NextResponse.json(newBookmark, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ message: 'Site eklenirken bir sorun oluştu' }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
