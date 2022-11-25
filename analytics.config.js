module.exports = {
  analytics: {
    gtag: {
      trackingID: 'G-KVB88SVNF8',
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
