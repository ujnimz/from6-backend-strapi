module.exports = ({env}) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  /* Beginning of snippet */
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            env('CF_PUBLIC_ACCESS_URL').replace(/^https?:\/\//, ''),
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            env('CF_PUBLIC_ACCESS_URL').replace(/^https?:\/\//, ''),
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
];
