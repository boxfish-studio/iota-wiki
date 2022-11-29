import React from 'react';
import Layout from '@theme/Layout';

export default function CookiePolicy() {
  return (
    <Layout title='Cookie Policy' description='Cookie Policy'>
      <h1>Cookie Policy</h1>
      <script
        id='CookieDeclaration'
        src='https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js'
        type='text/javascript'
        async
      ></script>
    </Layout>
  );
}
