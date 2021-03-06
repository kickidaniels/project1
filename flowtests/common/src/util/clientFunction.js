import { ClientFunction } from 'testcafe';

export const scrollToElement = ClientFunction(selector => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ block: 'center' });
  }
});

export const fetchUrl = ClientFunction(url => fetch(url));

export const goBack = ClientFunction(() => window.history.back());

export const goForward = ClientFunction(() => window.history.forward());

export const getCurrentUrl = ClientFunction(() => window.location.href);
// eslint-disable-next-line no-return-assign
export const navigateToUrl = ClientFunction(url => (window.location = url));
export const clickElement = ClientFunction(selector => document.querySelector(selector).click());

export const getCurrentUrlPathName = ClientFunction(() => window.location.pathname);

export const getUrlSearchParameters = ClientFunction(() => window.location.search);
