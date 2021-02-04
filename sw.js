/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-a5eb187b5f7efddfa908.js"
  },
  {
    "url": "framework-c8d3a5345e3f321d7da5.js"
  },
  {
    "url": "styles.0c6ab3b62ce2f7029d3d.css"
  },
  {
    "url": "styles-e8fd4555a67a3390b64e.js"
  },
  {
    "url": "aceecd74-aaa8ba91a287517d9100.js"
  },
  {
    "url": "app-5f327a30514958b3bd4b.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2a17f18d8d25bc5320d9bff59f391ec5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ad6431e4664bcf916d19.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "26eee7a5889e4162c243ebf4d8987820"
  },
  {
    "url": "polyfill-2cb897c2a056d28c9332.js"
  },
  {
    "url": "f75ca9e7a5abc04cc9669fbd65c82944fd2ea495-9ae258410a039f6c9356.js"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-rules-js-810d2560525cf24f8aa5.js"
  },
  {
    "url": "page-data/rules/page-data.json",
    "revision": "d109cc466463f3e3caa100d3a9ec5832"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-faq-js-70d2c019488bd66ebbd9.js"
  },
  {
    "url": "page-data/faq/page-data.json",
    "revision": "67e87437459988eecee73b72e42bea95"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-404-js-67798541778360dc691d.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "36174ea07b827de5b9e3d32786c7f5e2"
  },
  {
    "url": "c0b520c78599ab9d2deccb4c2b61af23d8a1ee4e-d57e403f6b3df0c7cfb5.js"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-offer-001-js-2414c5f20a5cfc911b08.js"
  },
  {
    "url": "page-data/offer-001/page-data.json",
    "revision": "ebe3e17ee91237c63e9e310ac714ce63"
  },
  {
    "url": "page-data/sq/d/2353285886.json",
    "revision": "e7d201268b49ac9df30dfd35b1e8f207"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-offer-002-js-6c2d7226066e28161dee.js"
  },
  {
    "url": "page-data/offer-002/page-data.json",
    "revision": "f6141c892810d47f2c95b959cd509f48"
  },
  {
    "url": "component---src-projects-shop-world-of-tanks-components-pages-offer-003-js-e35efa5aab1dc27f229e.js"
  },
  {
    "url": "page-data/offer-003/page-data.json",
    "revision": "78f98cafa493f0afee6b175c79d4be4b"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a0422841930226f7d495823b1438d0a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-5f327a30514958b3bd4b.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
