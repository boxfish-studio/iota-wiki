import PropTypes from 'prop-types';

/**
 * Enable cookie bot on the website
 * @param {string} domainGroupId - Cookie bot domain group id
 * @param {string} language - Cookie bot data culture
 * @returns {*|null}
 * @constructor
 */
function CookieBot({ domainGroupId }) {
  if (typeof window !== 'undefined' && domainGroupId && document) {
    const script = document.createElement('script');
    script.setAttribute('id', 'CookieBot');
    script.setAttribute('src', 'https://consent.cookiebot.com/uc.js');
    script.setAttribute('data-cbid', domainGroupId);
    script.setAttribute('data-blockingmode', 'auto');
    script.setAttribute('type', 'text/javascript');
    const head = document.querySelector('html > head');
    head.insertBefore(script, head.firstChild);
  }
}

CookieBot.defaultProps = {
  domainGroupId: undefined,
};

CookieBot.propTypes = {
  /** Cookie bot domain group id */
  domainGroupId: PropTypes.string,
};

export default CookieBot;
