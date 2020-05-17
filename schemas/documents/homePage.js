export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'introText',
      type: 'bodyPortableText',
      title: 'Intro Text'
    },
    {
      name: 'aboutText',
      type: 'bodyPortableText',
      title: 'About Text'
    },
    {
      name: 'aboutImage',
      type: 'mainImage',
      title: 'About Image'
    },
    {
      name: 'homeGallery',
      type: 'imageGallery',
      title: 'Home Gallery'
    },
    {
      name: 'contactImage',
      type: 'mainImage',
      title: 'Contact Image'
    },
    {
      name: 'socialSharing',
      type: 'socialSharing',
      title: 'Social Sharing Data'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
