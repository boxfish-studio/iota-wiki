import React from 'react';
import Layout from '@theme/Layout';

export default function CookiePolicy() {
  return (
    <Layout title='Cookie Policy' description='Cookie Policy'>
      <div className='hero'>
        <div className='container'>
          <div className='text--center margin-bottom--lg'>
            <h1 className='hero__title margin--none'>Cookie Policy</h1>
          </div>
          <div className='row'>
            <script
              id='CookieDeclaration'
              src='https://consent.cookiebot.com/8f051d60-4ecb-41a0-abb9-4874fd999e4f/cd.js'
              type='text/javascript'
              async
            ></script>
          </div>
        </div>
      </div>
    </Layout>
  );
}
