import React, { useEffect } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

import { Layout } from './components';

const theme = createTheme();
const emoCache = createCache({key: 'css', prepend: false});

function MyApp({ Component, pageProps }) {

  return (
  <StateContext>
    <Layout>
      <CacheProvider value={emoCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Layout>
  </StateContext>
  )
}

export default MyApp
