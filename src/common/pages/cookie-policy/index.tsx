import CookieBotDeclaration from '@site/src/common/components/CookieBot/CookieBotDeclaration';
import Layout from '@theme/Layout';
import React from 'react';

export default function CookiePolicy() {
  return (
    <>
      <Layout>
        <div className='hero'>
          <div className='container'>
            <div className='text--center margin-bottom--lg'>
              <h1 className='hero__title margin--none'>Cookie Policy</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <CookieBotDeclaration domainGroupId='8f051d60-4ecb-41a0-abb9-4874fd999e4f'></CookieBotDeclaration>
        </div>
      </Layout>
    </>
  );
}
