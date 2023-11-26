import { getHeader } from '@/sanity/lib/sanity-utils'

const getData = async () => {
  const header = await getHeader()
  return header
}

const IndexPage = async () => {
  const header = await getData()
  console.log(header)
  return <section className="px-8"></section>
}
export default IndexPage
