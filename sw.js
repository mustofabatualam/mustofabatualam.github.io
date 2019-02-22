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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2018/11/01/malang/index.html",
    "revision": "4220ab17622545d0320936b656967267"
  },
  {
    "url": "2018/11/02/batu/index.html",
    "revision": "24cd43716ea2bed8ac2f64146b836e09"
  },
  {
    "url": "404.html",
    "revision": "9bc6b56e88076cbc0999e59f58115d31"
  },
  {
    "url": "blog/index.html",
    "revision": "d44773e0d50be778ec4be1e61a1cc638"
  },
  {
    "url": "data-faq/1-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/2-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/3-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/4-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/5-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-faq/6-faq/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-gallery/gallery-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-1/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-2/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-3/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-4/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-5/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-6/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-7/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-8/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-instagram/ig-9/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-paket-wisata/gili-ketapang.html",
    "revision": "8bdbde443982622ae675782396a344b1"
  },
  {
    "url": "data-products/1-mobilio/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/2-all-new-avanza/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/3-all-new-xenia/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/4-ertiga/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/5-kijang-inova/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/6-isuzu-elf/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "data-products/7-isuzu-elf (salinan)/index.html",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "favicon.ico",
    "revision": "57286aeea10a4d1560df739c5b933a24"
  },
  {
    "url": "feed.xml",
    "revision": "49ac16553e76e4c8c20eb8c5eb3b2606"
  },
  {
    "url": "gallery/index.html",
    "revision": "562c70d8c96318616982573742ab52e7"
  },
  {
    "url": "google80eb15f70004671a.html",
    "revision": "2c06e59ed42caa2f9c628716dd34fc23"
  },
  {
    "url": "harga-sewa/index.html",
    "revision": "becc863bb9bf80de0b91db595a697d83"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "169e45c907a7c4e51aed5ee22622fff8"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "fc08bd7737680ba12e28dfd46d26aa62"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "54217ff92349738db9c10de1fac63323"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "28dd35251af8c9de26acf9bf0e331ec6"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "8759f482220069d4821b05ef84579192"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "23d3ae1792b750c2174d826cdd46e16f"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "4bd7e44cf539c6791c906d5f56fcf46f"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "9fed7506b346b8423bb588cfe3444b80"
  },
  {
    "url": "img/1-mobilio.jpg",
    "revision": "76350b70f4e79ccb87352e860773c34d"
  },
  {
    "url": "img/2-all-new-avanza.jpg",
    "revision": "024735036e9e2c9662fa60a4f69509a5"
  },
  {
    "url": "img/3-all-new-xenia.jpg",
    "revision": "f38297b32b41b025f156f7c9537e25bd"
  },
  {
    "url": "img/4-ertiga.jpg",
    "revision": "a4ee8f112982e11a2680e53a8c2e1498"
  },
  {
    "url": "img/5-kijang-innova.jpg",
    "revision": "8f5c817099b08e2357a35ce5ccd8aa58"
  },
  {
    "url": "img/6-isuzu-elf.jpg",
    "revision": "d884d04009008da1ad8767bbfcf371ab"
  },
  {
    "url": "img/automobile.png",
    "revision": "92f495a188e5203923854e438eb84e7c"
  },
  {
    "url": "img/calendar.png",
    "revision": "d3534e9d2f20dc399af119e17dbe3298"
  },
  {
    "url": "img/call.png",
    "revision": "7c384c93479defbf7c21363741b36d7b"
  },
  {
    "url": "img/cash.png",
    "revision": "8d69b60c1367c85e354922cf19e6389c"
  },
  {
    "url": "img/close.svg",
    "revision": "3360c57cdbbebca82e3a792f0a57876c"
  },
  {
    "url": "img/contacts.png",
    "revision": "e4231cc9871db4643d5d34f0ab0bc18b"
  },
  {
    "url": "img/FAQ.png",
    "revision": "89a5bf344208cee5f2771c8d16900822"
  },
  {
    "url": "img/favicon.png",
    "revision": "ce0e9c7201c45feb21463a654ef4dffa"
  },
  {
    "url": "img/gallery-1.jpg",
    "revision": "21012c11e0507adad50c48d2a4c72128"
  },
  {
    "url": "img/gallery-2.jpg",
    "revision": "0515a455f8dc93a0c66b637ad656eaed"
  },
  {
    "url": "img/gallery-3.jpg",
    "revision": "481d449cca0d912d8bde9435078c5a68"
  },
  {
    "url": "img/gallery-4.jpg",
    "revision": "7db391755d2d005ca329a49663f19391"
  },
  {
    "url": "img/gallery-5.jpg",
    "revision": "9cc189aad3980b33f676029587cfcf80"
  },
  {
    "url": "img/gallery-6.jpg",
    "revision": "b288a632f7c4fe0182b0f30b8a479a31"
  },
  {
    "url": "img/gili-ketapang.jpeg",
    "revision": "f066516c83ec0a1e792a16880eb78a00"
  },
  {
    "url": "img/house.png",
    "revision": "2908b5909999bb91b067800cbcf3cfc9"
  },
  {
    "url": "img/icons/144.png",
    "revision": "377166356e66ad79e8a75b80861ae6e5"
  },
  {
    "url": "img/icons/168.png",
    "revision": "bca5336e6fdaa87b253c4cd1ef4f27a3"
  },
  {
    "url": "img/icons/192.png",
    "revision": "b03b9211e11bba69a9a768d5bb7514d3"
  },
  {
    "url": "img/icons/72.png",
    "revision": "f4ba66be3d28e509947b8b89838ba701"
  },
  {
    "url": "img/icons/96.png",
    "revision": "0ab1f9532a3fac40dddbb1fcb2048f23"
  },
  {
    "url": "img/icons/any.svg",
    "revision": "72b192752becd0df8e06921b20ecf970"
  },
  {
    "url": "img/icons/favicon.png",
    "revision": "ce0e9c7201c45feb21463a654ef4dffa"
  },
  {
    "url": "img/intro-bg.jpg",
    "revision": "0487e6f5a1eb70491e80176cfb679319"
  },
  {
    "url": "img/klikada-panjang.svg",
    "revision": "fa27eef4158316cefa33e89dbfc29f4b"
  },
  {
    "url": "img/logo-wisata-tropis-biru.png",
    "revision": "f21781319bd7c373deb7819b00aea640"
  },
  {
    "url": "img/logo-wisata-tropis.png",
    "revision": "ade0f755b4946a2b9c3c00bb6cfa4ab6"
  },
  {
    "url": "img/map.png",
    "revision": "7f5c0c05c999f61f001581898159d744"
  },
  {
    "url": "img/menu.svg",
    "revision": "a833de9795cac2a5d2031a39af727844"
  },
  {
    "url": "img/news.png",
    "revision": "a66ee4b66bcc76b2dfe78411f81bfe52"
  },
  {
    "url": "img/phones-symbol.svg",
    "revision": "f16134d24c95484a04754e56c6b0986c"
  },
  {
    "url": "img/price-tag.png",
    "revision": "a1b83faa63117b48805ae469502df702"
  },
  {
    "url": "img/product-features.png",
    "revision": "60c260bff963efc1cca530df32332e24"
  },
  {
    "url": "img/sms.png",
    "revision": "633fbc2ce35abe1dbbe936b613eaeec9"
  },
  {
    "url": "img/sms.svg",
    "revision": "878cb683823bc63731f8ef65323abc48"
  },
  {
    "url": "img/whatsapp.svg",
    "revision": "47c77bf133116ff76838809ae5d2c83a"
  },
  {
    "url": "index.html",
    "revision": "dfd025408df6ad00885fc980dbededf1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.css",
    "revision": "c495654869785bc3df60216616814ad1"
  },
  {
    "url": "lib/font-awesome/css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "lib/font-awesome/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "lib/font-awesome/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "lib/ionicons/css/ionicons.css",
    "revision": "f27354b28af3cf48d28260c03305d0ce"
  },
  {
    "url": "lib/ionicons/css/ionicons.min.css",
    "revision": "0d6763b67616cb9183f3931313d42971"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.eot",
    "revision": "2c2ae068be3b089e0a5b59abb1831550"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.ttf",
    "revision": "24712f6c47821394fba7942fbb52c3b2"
  },
  {
    "url": "lib/ionicons/fonts/ionicons.woff",
    "revision": "05acfdb568b3df49ad31355b19495d4a"
  },
  {
    "url": "manifest.json",
    "revision": "96633b8cf2d21ee9184b6520ec59b66f"
  },
  {
    "url": "paket-wisata/index.html",
    "revision": "aebb7ad1beb854c936bf22a8222fd8f1"
  },
  {
    "url": "robots.txt",
    "revision": "3eb4b8add153ba9719324335c7c02076"
  },
  {
    "url": "sitemap.xml",
    "revision": "e1e8dd86d1b2f07e6f91581820715635"
  },
  {
    "url": "sw.html",
    "revision": "9ddb3c30045037e3f8d7c4c5810a4386"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
