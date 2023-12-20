import Card from '@/components/card'
import { cards } from '@/data'
import { getTranslations } from 'next-intl/server'

const IndexPage = async () => {
  const t = await getTranslations('intro')

  return (
    <section className="px-8 md:px-20">
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="text-center font-handwriting text-5xl md:text-6xl">{t('title')}</h1>
        <p className="mt-4 text-balance text-center">{t('description')}</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map(card => (
          <Card
            title={card.title}
            categoryId={card.categoryId}
            description={card.description}
            key={card.id}
            id={card.id}
            keywords={card.keywords}
          />
        ))}
      </div>
    </section>
  )
}
export default IndexPage
