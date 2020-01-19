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
      name: 'description',
      type: 'bodyPortableText',
      title: 'Description'
    },
    {
      name: 'width',
      type: 'number',
      title: 'Width In Inches'
    },
    {
      name: 'height',
      type: 'number',
      title: 'Height In Inches'
    },
    {
      name: 'images',
      type: 'imageGallery',
      title: 'Product Images',
      description: 'If adding variant images add them inside the variant below'
    },
    {
      name: 'shopifyData',
      type: 'object',
      title: 'Shopify Data',
      options: { collapsible: true, collapsed: true },
      description: '',
      fields: [
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
          name: 'variants',
          title: 'Variants',
          type: 'array',
          readOnly: true,
          of: [
            {
              type: 'reference',
              to: [{type: 'productVariant'}]
            }
          ]
        }
      ]
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      description: 'Show related products on bottom of page',
      validation: Rule => Rule.max(3).warning('Max of 3 related products'),
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}]
        }
      ]
    },
    {
      name: 'socialSharing',
      type: 'socialSharing',
      title: 'Social Sharing Data'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'shopifyData.slug',
      media: 'mainImage',
      price: 'shopifyData.defaultPrice'
    },
    prepare({title = 'No title', slug = {}, media, price}) {
      return {
        title,
        media,
        subtitle: `$${price} | ${slug.current}`
      }
    }
  }
}
