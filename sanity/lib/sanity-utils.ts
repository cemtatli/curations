import { groq } from 'next-sanity'
import { client } from './client'

export async function getHeader(): Promise<any> {
  return client.fetch(groq`*[_type == "mainCategory"]{
    _id,
    name,
    slug,
    color,
    "subCategories": subCategories[]->{
      _id,
      name,
      description,
      slug,
      color
    }
  }`)
}

export async function getSubCategoryIds(): Promise<any> {
  return client.fetch(groq`*[_type == "subCategory"]{
    _id,
    name,
    slug
  }`)
}

export async function checkUrlExists(url: string) {
  const query = '*[(_type == "draftSites" || _type == "sites") && url == $url]'
  const params = { url }
  const results = await client.fetch(query, params)
  return results.length > 0
}
