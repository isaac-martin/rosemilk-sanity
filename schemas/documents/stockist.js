export default {
  name: 'stockist',
  type: 'document',
  title: 'Stockist',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City'
    },
    {
      name: 'stateZip',
      type: 'string',
      title: 'State + Zip'
    },
    {
      name: 'website',
      type: 'url',
      title: 'Website'
    },
    {
      name: 'mapLink',
      type: 'url',
      title: 'Map Link'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
