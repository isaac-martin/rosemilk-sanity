export default {
  name: 'productVariant',
  type: 'document',
  title: 'Variant',
  fields: [
    {
      name: 'productId',
      type: 'number',
      title: 'Product ID',
      readOnly: true
    },
    {
      name: 'title',
      type: 'string',
      title: 'Parent Product Title',
      readOnly: true
    },
    {
      name: 'variantId',
      type: 'number',
      title: 'Variant ID',
      readOnly: true
    },
    {
      name: 'variantTitle',
      type: 'string',
      title: 'Variant Title',
      readOnly: true
    },
    {
      name: 'images',
      type: 'imageGallery',
      title: 'Variant Images'
    },
    {
      name: 'sku',
      type: 'string',
      title: 'SKU',
      readOnly: true
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      readOnly: true
    }
  ],
  preview: {
    select: {
      title: 'variantTitle',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}
