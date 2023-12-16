import { getSubCategoryIds } from '@/sanity/lib/sanity-utils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    const categoryid = await getSubCategoryIds()
    return NextResponse.json(categoryid, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ message: 'Site eklenirken bir sorun oluştu' }, { status: 500 })
  }
}

export const dynamic = 'force-dynamic'
