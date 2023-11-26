import { groq } from 'next-sanity'
import { client } from './client'

export async function getHeader(): Promise<any> {
  return client.fetch(groq`*[_type == "mainCategory"]{
    _id,
    name,
    "subCategories": subCategories[]->{
      name,
      description
    }
  }`)
}
