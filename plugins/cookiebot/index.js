module.exports = function () {
  return {
    name: 'docusaurus-cookie-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              id: 'Cookiebot',
              href: 'https://consent.cookiebot.com/uc.js',
              'data-cbid': '8f051d60-4ecb-41a0-abb9-4874fd999e4f',
              'data-blockingmode': 'auto',
              type: 'text/javascript',
            },
          },
        ],
        preBodyTags: [],
        postBodyTags: [],
      };
    },
  };
};
