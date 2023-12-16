/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import { Badge } from './ui/badge'

type cardProps = {
  id: string
  title: string
  description: string
  categoryId: string
  keywords: any
}

const Card: React.FC<cardProps> = ({ id, title, description, keywords }) => {
  return (
    <div
      key={id}
      className="flex flex-1 flex-col gap-6 rounded-lg border border-border bg-zinc-50/50 p-6 backdrop-blur-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description}</p>
        <Link href={`/`} className="relative flex-1 cursor-pointer rounded-lg ">
          <img src="https://placehold.co/800x400" alt={title} className="rounded-lg" />
          <div className="absolute bottom-2 left-2 flex items-center justify-start gap-x-2">
            {keywords.map((keyword: any, index: any) => (
              <Badge key={index} variant="secondary" className="whitespace-nowrap text-xs">
                {keyword}
              </Badge>
            ))}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
