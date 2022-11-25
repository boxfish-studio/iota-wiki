// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  analytics: {
    googleAnalytics: {
      trackingID: process.env['GOOGLE_ANALYTICS_TRACKING_ID'],
      anonymizeIP: true,
    },
  },
  cookies: {
    scripts: [
      {
        id: 'Cookiebot',
        src: 'https://consent.cookiebot.com/uc.js',
        'data-cbid': '8f051d60-4ecb-41a0-abb9-4874fd999e4f',
        'data-blockingmode': 'auto',
      },
      {
        id: 'CookieDeclaration',
        src: 'https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js',
        async: true,
      },
    ],
  },
};
