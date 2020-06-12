document.addEventListener('DOMContentLoaded', () => {
  const { userAgent } = navigator;

  if (userAgent.indexOf('MSIE ') > -1 || userAgent.indexOf('Trident/') > -1) {
    document.getElementsByTagName('html')[0].classList.add('is-ie');
  }
});
