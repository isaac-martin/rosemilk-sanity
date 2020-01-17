export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e17b8268ba22633782855f8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p9p9d32y',
                  apiId: '6490d467-fde2-482f-9fec-9d2894d15e1c'
                },
                {
                  buildHookId: '5e17b826df759d3c3472574d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sfmmh4kw',
                  apiId: 'fb00bd5a-ede7-4bc9-87d6-618581a638ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isaac-martin/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-sfmmh4kw.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ]
}
