import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';

export default function NotFound() {
  const { pathname } = useLocation();
  const pathParts = pathname.split('/').filter(Boolean);

  const context = useDocusaurusContext();

  // eslint disable @typescript-eslint/no-explicit-any
  const sections: any = context.globalData['docusaurus-plugin-content-docs'];

  // eslint disable @typescript-eslint/no-explicit-any
  const sectionsData = Object.values(sections).map((section: any) => {
    const entries = section.versions[0].docs;
    return entries;
  });

  const allEntries = sectionsData.flat() as unknown as Array<{
    id: string;
    path: string;
    sidebar: string;
  }>;

  const possibleMatchingEntries = allEntries.filter((entry) =>
    pathParts.some((part) => entry.id.includes(part)),
  );

  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main className='container margin-vert--xl'>
          <div className='row'>
            <div className='col col--6 col--offset-3'>
              <h1 className='hero__title'>
                <Translate
                  id='theme.NotFound.title'
                  description='The title of the 404 page'
                >
                  Page Not Found
                </Translate>
              </h1>
              <p>Maybe you were looking for these:</p>
              <ul>
                {possibleMatchingEntries.map((entry) => {
                  return (
                    <li key={entry.id}>
                      <a title={entry.id} href={entry.path}>
                        {entry.id}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
