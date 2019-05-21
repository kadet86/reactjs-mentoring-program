const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/search/:query?/:searchBy?/:sortBy?', (req, res) => {
      const actualPage = '/search';
      const { query, searchBy, sortBy } = req.params;
      app.render(req, res, actualPage, {
        query,
        searchBy,
        sortBy,
      });
    });

    server.get('/film/:id', (req, res) => {
      const actualPage = '/film';
      const { id } = req.params;
      app.render(req, res, actualPage, {
        id,
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
