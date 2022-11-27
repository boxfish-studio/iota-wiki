import PropTypes from 'prop-types';
import React from 'react';

/**
 * Enable cookie bot on the website
 * @param {string} domainGroupId - Cookie bot domain group id
 * @param {string} language - Cookie bot data culture
 * @returns {*|null}
 * @constructor
 */
function CookieBotDeclaration({ domainGroupId }) {
  /* istanbul ignore next */
  return (
    <script
      id='CookieDeclaration'
      src={`https://consent.cookiebot.com/${domainGroupId}/cd.js`}
      type='text/javascript'
      async
    />
  );
}

CookieBotDeclaration.defaultProps = {
  domainGroupId: undefined,
};

CookieBotDeclaration.propTypes = {
  /** Cookie bot domain group id */
  domainGroupId: PropTypes.string,
};

export default CookieBotDeclaration;
