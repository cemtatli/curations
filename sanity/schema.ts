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
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'color',
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
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'color',
      type: 'string',
    },
    {
      name: 'subCategories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subCategory' }] }],
    },
  ],
}

const sitesSchema: SchemaTypeDefinition = {
  name: 'sites',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'url',
      type: 'url',
    },
    {
      name: 'keywords',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'subCategory',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subCategory' }] }],
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [mainCategorySchema, subCategorySchema, sitesSchema],
}
