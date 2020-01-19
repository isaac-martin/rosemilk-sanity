export default {
  name: 'shopifyData',
  type: 'object',
  title: 'Shopify Data',
  options: {collapsible: true, collapsed: true},
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
      name: 'procuctType',
      type: 'string',
      title: 'Product Type',
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
          to: [{ type: 'productVariant' }]
        }
      ]
    }
  ]
}
