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
      title: 'Release Date',
      name: 'releaseDate',
      type: 'reference',
      to: [{ type: 'releaseDate' }]
    },
    {
      name: 'deleted',
      title: 'Hide from website',
      type: 'boolean',
      description:
        'This is set manually when an item is deleted from shopify, but you can also toggle to not show on website. If you want to show on date, use the release date'
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Shopify Image',
      readOnly: true
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
      type: 'shopifyData',
      title: 'Shopify Data'
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
    prepare({ title = 'No title', slug = {}, media, price }) {
      return {
        title,
        media,
        subtitle: `$${price} | ${slug.current}`
      }
    }
  }
}
