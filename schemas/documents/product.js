import { format } from 'date-fns'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readOnly: true
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      readOnly: true
    },
    {
      name: 'defaultPrice',
      type: 'string',
      title: 'Price',
      readOnly: true
    },
    {
      name: 'productId',
      type: 'number',
      title: 'Product ID',
      readOnly: true
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    },
    {
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'productVariant' }]
        }
      ]
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, slug = {}, media }) {
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        media,
        subtitle: publishedAt ? path : 'Missing publishing date'
      }
    }
  }
}
