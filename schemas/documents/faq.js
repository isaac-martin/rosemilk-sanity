export default {
  name: 'faq',
  type: 'document',
  title: 'Faq',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question'
    },
    {
      name: 'answer',
      type: 'string',
      title: 'Answer'
    }
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer'
    }
  }
}
