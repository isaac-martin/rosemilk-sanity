export default {
  name: 'collection',
  type: 'document',
  title: 'Collection',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }]
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
      slug: 'slug',
    }
  }
}
