import moment from 'moment'

export default {
  name: 'releaseDate',
  type: 'document',
  title: 'Release Date',
  fields: [
    {
      title: 'Name',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Release Date',
      name: 'launchAt',
      description: 'After this date / time the product will be live',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'launchAt'
    },
    prepare({ title, date }) {
      return {
        title,
        subtitle: moment(date).format('ddd Do, MMM YYYY | h:mmA')
      }
    }
  }
}
