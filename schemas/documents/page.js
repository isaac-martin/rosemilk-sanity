export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'pageTemplateSelector',
      type: 'pageTemplateSelector',
      title: 'Page Template Selector'
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
      name: 'socialSharing',
      type: 'socialSharing',
      title: 'Social Sharing Data'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
  }
}
