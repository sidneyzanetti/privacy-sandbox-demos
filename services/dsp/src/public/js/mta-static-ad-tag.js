(() => {
  const $ins = document.querySelector('ins.ads');
  const scriptSrc = document.currentScript.getAttribute('src');
  const staticAdURL = new URL(scriptSrc);
  staticAdURL.pathname = '/static-ad.html';

  const $iframe = document.createElement('iframe');
  $iframe.width = 300;
  $iframe.height = 250;
  $iframe.src = staticAdURL;
  $iframe.setAttribute('scrolling', 'no');
  $iframe.setAttribute('style', 'border: none');
  $iframe.setAttribute('allow', 'attribution-reporting; run-ad-auction');
  $ins.appendChild($iframe);
})();
