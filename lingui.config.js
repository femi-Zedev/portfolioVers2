module.exports = {
  locales: ['en', 'fr', 'pseudo'],
  pseudoLocale: 'pseudo',
  sourceLocale: 'en',
  fallbackLocales: {
    default: 'en'
  },
  catalogs: [
    {
      path: 'translations/locales/{locale}/messages',
      include: ['pages', 'components']
    }
  ],
  format: 'po'
}