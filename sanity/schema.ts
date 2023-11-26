import { type SchemaTypeDefinition } from 'sanity'

const subCategorySchema: SchemaTypeDefinition = {
  name: 'subCategory',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'description',
      type: 'string',
    },
  ],
}

const mainCategorySchema: SchemaTypeDefinition = {
  name: 'mainCategory',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'subCategories',
      type: 'array',
      of: [ { type: 'reference', to: [ { type: 'subCategory' } ] } ],
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainCategorySchema, subCategorySchema],
}