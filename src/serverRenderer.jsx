import 'babel-polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from './configureStore';

function renderHTML(html, preloadedState) {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Reactjs Mentoring Program 2019</title>
          ${
              process.env.NODE_ENV === 'development'
                  ? ''
                  : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
          }
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
                /</g,
                '\\u003c'
            )}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        // This context object contains the results of the render.
        const context = {};

        const renderRoot = () => (
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        store
            .runSaga()
            .toPromise()
            .then(() => {
                const htmlString = renderToString(renderRoot());

                // context.url contains the URL to redirect to if a <Redirect> was used.
                if (context.url) {
                    res.writeHead(302, {
                        Location: context.url,
                    });
                    res.end();
                    return;
                }

                const preloadedState = store.getState();

                res.send(renderHTML(htmlString, preloadedState));
            });

        // Do first render, it triggers initial actions.
        renderToString(renderRoot());
        // When the first render is finished, send the END action to redux-saga.
        store.close();
    };
}
