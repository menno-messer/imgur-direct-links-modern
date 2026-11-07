/**
 * Imgur Direct Links Modern
 * Run in the browser developer console while viewing an Imgur album/gallery.
 * No network requests are made by this script.
 */
(() => {
  'use strict';

  if (!/(^|\.)imgur\.com$/i.test(location.hostname)) {
    console.warn('Open an Imgur album or gallery before running this script.');
    return;
  }

  const mediaHosts = new Set(['i.imgur.com']);
  const allowedExtensions = /\.(?:jpe?g|png|gif|webp|avif|mp4|webm)$/i;
  const found = new Set();

  function addUrl(raw) {
    if (!raw) return;
    try {
      const url = new URL(raw, location.href);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
      if (!mediaHosts.has(url.hostname.toLowerCase())) return;
      // Do not guess original-resolution URLs from thumbnails.
      if (!allowedExtensions.test(url.pathname)) return;
      url.search = '';
      url.hash = '';
      found.add(url.href);
    } catch {
      // Ignore invalid/malformed URLs.
    }
  }

  function addSrcset(srcset) {
    if (!srcset) return;
    for (const item of srcset.split(',')) {
      addUrl(item.trim().split(/\s+/)[0]);
    }
  }

  document.querySelectorAll('img').forEach((img) => {
    addUrl(img.currentSrc);
    addUrl(img.getAttribute('src'));
    addUrl(img.getAttribute('data-src'));
    addSrcset(img.getAttribute('srcset'));
    addSrcset(img.getAttribute('data-srcset'));
  });

  document.querySelectorAll('video, video source').forEach((el) => {
    addUrl(el.currentSrc);
    addUrl(el.getAttribute('src'));
  });

  // Some Imgur layouts expose media as direct links rather than <img> sources.
  document.querySelectorAll('a[href]').forEach((a) => addUrl(a.getAttribute('href')));

  const links = [...found];
  if (!links.length) {
    console.warn('No direct media links found. Scroll through the album to load images, then run again. The page layout may have changed.');
    return;
  }

  const result = links.join('\n');
  console.log(result);
  console.info(`Found ${links.length} unique direct media link(s).`);
  console.info('Tip: In DevTools, right-click the output to copy it, or use copy(imgurDirectLinks) in Chrome/Brave.');
  // Expose results for convenient copying in Chrome/Brave DevTools.
  window.imgurDirectLinks = result;
})();
