import { postSiteClient } from '@/sanity/lib/client'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json()
    const { name, url, keywords, subCategory } = body

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
