const express = require('express');

const PORT = process.env.PORT ?? 3000;
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static('build', { extensions: ['html'] }));

app.use(function (req, res) {
  res.status(400);
  const isShimmer = req.url.startsWith('/shimmer');
  const isNext = req.url.startsWith('/next');
  if (isShimmer) {
    res.render(__dirname + './../build/shimmer/404.html');
  } else if (isNext) {
    res.render(__dirname + './../build/next/404.html');
  } else {
    res.render(__dirname + './../build/404.html');
  }
});

app.listen(PORT, () => {
  console.log(`Index server listening on ${PORT}`);
});

module.exports = app;
