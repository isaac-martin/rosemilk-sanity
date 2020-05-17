export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'social',
      type: 'socialSharing',
      title: 'Social Sharing + Google Data',
      description: 'Default social sharing'
    }
  ]
}
