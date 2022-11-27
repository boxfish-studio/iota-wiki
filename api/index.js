const express = require('express');
const { renderFile } = require('ejs');
const fs = require('fs');

const PORT = process.env.PORT ?? 3000;
const DOCS_BUILD = __dirname + './../build/index.html';

const indexPath = DOCS_BUILD;
const app = express();

app.engine('html', renderFile);
app.use(function (req, res) {
  //   const isShimmer = req.url.startsWith('/shimmer');
  //   const isNext = req.url.startsWith('/next');

  //   if (isShimmer) {
  //     res.render(DOCS_BUILD + '/shimmer/404.html');
  //   } else if (isNext) {
  //     res.render(DOCS_BUILD + '/next/404.html');
  //   } else {
  //     res.render(DOCS_BUILD + '/404.html');
  //   }
  fs.readFile(DOCS_BUILD, 'utf8', (err, indexHtml) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }

    console.log('indexHtml', indexHtml);
    indexHtml = indexHtml.replace(
      '<head>',
      `<head><script id="CookieDeclaration" src="https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js" type="text/javascript"></script>`,
    );

    return res.send(indexHtml);
  });
});
app.use(express.static('build', { extensions: ['html'] }));

app.get('*', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  fs.readFile(indexPath, 'utf8', (err, indexHtml) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }

    console.log('indexHtml', indexHtml);
    indexHtml = indexHtml.replace(
      '<head>',
      `<head><script id="CookieDeclaration" src="https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js" type="text/javascript"></script>`,
    );

    return res.send(indexHtml);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
