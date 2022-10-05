import {useEffect} from 'react';
import {getCookieValue, setCookieValue} from '../utils/helpers'

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    if (!getCookieValue('g-theme')) {
      setCookieValue('g-theme', 'LIGHT', 2147483647, '/');
    }
  },[])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;