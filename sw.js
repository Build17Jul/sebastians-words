// PROTOTYPE - NOT FOR PRODUCTION
// Sebastian's First English Words service worker: keeps the game on the tablet so it opens offline.
// Network first (a new version is picked up when online), the cached copy when offline.
importScripts('assets/voice-ai/clips-ai.js'); // every line in the AI voice (the only voice the offline copy needs)
const CACHE = 'sebastians-english-words-v3';
const FILES = ['./', './index.html', './config.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './assets/voice/clips.js', './assets/voice-you/clips-you.js',
  './assets/voice-ai/clips-ai.js', ...Object.keys(self.AI_CLIPS || {}).map(n => `./assets/voice-ai/${n}.m4a`)];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })));
});
