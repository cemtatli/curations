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