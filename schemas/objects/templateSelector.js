export default {
  name: 'pageTemplateSelector',
  type: 'object',
  title: 'Page Template Selector',
  options: {collapsible: true, collapsed: true},
  fields: [
    {
      title: 'Template',
      name: 'template',
      type: 'string',
      description: 'You can most of the time leave this as default',
      options: {
        list: [
          {title: 'Default Template', value: 'default'},
          {title: 'Stockist', value: 'stockist'}
        ], 
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    }
  ]
}
