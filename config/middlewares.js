module.exports = [
  'strapi::logger',
  'strapi::errors',
  /* Replace 'strapi::security', with this snippet */
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
                'market-assets.strapi.io',
                'bucket-strapi-998.s3.us-east-2.amazonaws.com',
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                'market-assets.strapi.io',
                'bucket-strapi-998.s3.us-east-2.amazonaws.com',
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
