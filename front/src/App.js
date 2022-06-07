import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { AppRouter } from './routers/AppRouter';
import client from './graphql/config';
import { MoviesHome } from './components/Movies/MoviesHome';
import { NavBar } from './components/Layout/NavBar';
import './assets/styles/global.css'

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* <div className='px-5 main'> */}
        <AppRouter />
      {/* </div> */}
    </ApolloProvider>
  );
}

export default App;
