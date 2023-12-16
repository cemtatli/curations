import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default function BookmarkDetail({ params }: Props) {
  return <div>{params.slug}</div>
}
