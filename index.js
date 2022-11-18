import nodeStatic from 'node-static';
import http from 'http';

const fileServer = new nodeStatic.Server('./build');

console.log('http://localhost:3000');

http
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        fileServer.serve(request, response, (e) => {
          if (e && e.status === 404) {
            const isShimmer = request.url.startsWith('/shimmer');
            const isNext = request.url.startsWith('/next');

            if (isShimmer) {
              fileServer.serveFile(
                '/shimmer/404.html',
                404,
                {},
                request,
                response,
              );
            } else if (isNext) {
              fileServer.serveFile(
                '/next/404.html',
                404,
                {},
                request,
                response,
              );
            } else {
              fileServer.serveFile('/404.html', 404, {}, request, response);
            }
          }
        });
      })
      .resume();
  })
  .listen(3000);
