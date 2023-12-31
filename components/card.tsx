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
        <Link href="/" className="relative flex-1 cursor-pointer rounded-lg ">
          <div className="flex h-[500px] w-full flex-1 rounded-b-lg bg-gradient-to-t from-sky-300  to-sky-50" />
          <div className="absolute bottom-2 left-2 flex items-center justify-start gap-x-2">
            {keywords.map((keyword: any, index: any) => (
              <Badge key={index} variant="secondary">
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
