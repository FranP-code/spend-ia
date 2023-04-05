/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
