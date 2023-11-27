/* eslint-disable @next/next/no-img-element */
import Container from '@/components/container'
import { cards } from '@/data'
import Image from 'next/image'

const IndexPage = async () => {
  return (
    <section className="px-8 md:px-20">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="text-center font-handwriting text-5xl md:text-6xl">Curations</h1>
        <p className="text-balance mt-4 text-center">Curated links for designers and developers.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map(card => (
          <div
            key={card.id}
            className="flex flex-1 flex-col gap-6 rounded-lg border border-border bg-zinc-50/50 p-6 backdrop-blur-lg">
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold">{card.title}</h2>
              <p className="text-balance text-sm">{card.description}</p>
              <div className="flex-1 cursor-pointer rounded-lg">
                <img src="https://placehold.co/800x400" alt={card.title} className="rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default IndexPage
