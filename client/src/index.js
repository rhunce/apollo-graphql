/* ======================== CODE FOR gettingStartedTutorial ======================== */
// import ReactDOM from 'react-dom';
// import App from './gettingStartedTutorial/App.js';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
// } from '@apollo/client';

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache(),
// });

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>,
//   document.getElementById('root')
// );
/* ================================================================================= */

/* ======================== CODE FOR useQueryTutorial ======================== */
import App from './useQueryTutorial/App.js'
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
/* ================================================================================= */