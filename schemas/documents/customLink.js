export default {
  name: 'customLink',
  type: 'document',
  title: 'External Link',
  description: 'Link to an external webpage (eg. Instagram)',
  fields: [
    {
      name: 'title',
      title: 'Link Text',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Link',
      type: 'url'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
