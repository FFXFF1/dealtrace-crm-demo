const pages = new Map([
  ['/', '/index.html'],
  ['/mobile', '/mobile.html'],
  ['/about', '/about.html'],
]);

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    const page = pages.get(url.pathname);

    if (page) {
      url.pathname = page;
      return env.ASSETS.fetch(new Request(url, request));
    }

    if (url.pathname === '/mobile/' || url.pathname === '/about/') {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url, 307);
    }

    return env.ASSETS.fetch(request);
  },
};
