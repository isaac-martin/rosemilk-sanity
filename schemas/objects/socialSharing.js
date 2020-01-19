export default {
  name: 'socialSharing',
  type: 'object',
  title: 'Social Sharing Data',
  options: {collapsible: true, collapsed: true},
  description: '',
  fields: [
    {
      name: 'text',
      type: 'excerptPortableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      description: 'Best Ratio here is 1200 x 630'
    }
  ]
}
