// import CookieBot from '@site/src/common/components/CookieBot/CookieBot';
import Layout from '@theme-original/Layout';
import { default as React, useEffect, useState } from 'react';

export default function LayoutWrapper(props) {
  const [mounted, setMounted] = useState(false);
  if (!mounted) {
    // Code for componentWillMount here
    // This code is called only one time before intial render
    if (typeof window !== 'undefined' && document) {
      const script = document.createElement('script');
      script.setAttribute('id', 'CookieBot');
      script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
      script.setAttribute('data-cbid', '8f051d60-4ecb-41a0-abb9-4874fd999e4f');
      script.setAttribute('data-blockingmode', 'auto');
      script.setAttribute('type', 'text/javascript');
      const head = document.querySelector('html > head');
      head.insertBefore(script, head.firstChild);
    }
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Layout {...props} />
      {/* <CookieBot domainGroupId='8f051d60-4ecb-41a0-abb9-4874fd999e4f'></CookieBot> */}
    </>
  );
}
