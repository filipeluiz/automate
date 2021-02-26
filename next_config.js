const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/testeCognitivo': { page: '/testeCognitivo' },
    '/adm/importDiscipline': { page: '/adm/importDiscipline' },
    '/adm/importStudent': { page: '/adm/importStudent' },
  }),
  basePath: isProd ? 'automate-par2dnqsd-filipeluiz.vercel.app' : '',
  assetPrefix: isProd ? 'automate-par2dnqsd-filipeluiz.vercel.app' : '',  
  images: {
    loader: 'imgix'
  }
}
