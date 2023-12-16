import Card from '@/components/card'
import { cards } from '@/data'

const IndexPage = async () => {
  return (
    <section className="px-8 md:px-20">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="text-center font-handwriting text-5xl md:text-6xl">Curations</h1>
        <p className="text-balance mt-4 text-center">Curated links for designers and developers.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map(card => (
          <Card
            title={card.title}
            categoryId={card.categoryId}
            description={card.description}
            key={card.id}
            id={card.id}
          />
        ))}
      </div>
    </section>
  )
}
export default IndexPage
