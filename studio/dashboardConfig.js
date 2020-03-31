export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e839f087302920171325388',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-e6xbyoqc',
                  apiId: '03b92ad6-7732-4295-bf8e-3859754ec6be'
                },
                {
                  buildHookId: '5e839f0817cfd00225fd235f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gt461r4d',
                  apiId: '0446e874-6450-4933-88f9-53c5f8fe0b5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ssh713/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gt461r4d.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
