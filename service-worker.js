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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "77c4ad182e84045c8f6c4b49ff877617"
  },
  {
    "url": "assets/css/0.styles.c1bb75b6.css",
    "revision": "5bd38ac7a71df11f45891961b2143530"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.3122ed1c.js",
    "revision": "9d5022412811d103e539bf555338971a"
  },
  {
    "url": "assets/js/3.9d95635a.js",
    "revision": "0b3aee32ca6fc86dd0cd5a754063c916"
  },
  {
    "url": "assets/js/app.3a09d5d1.js",
    "revision": "ced5dbc5b35c5ce8f520eb1f650ac9bd"
  },
  {
    "url": "index.html",
    "revision": "389bb6d5b558f9f3f2e210fd268b12bf"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "menu/zh-cn.html",
    "revision": "dd05d834a8a35c7bf62572913589bc3d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
