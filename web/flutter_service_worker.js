'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aaba2331e48442e453b918b4a3889cbc",
"version.json": "d6d9447e84afba18e5e52672b96278b6",
"index.html": "4ca00626338c894929bd75606619e99d",
"/": "4ca00626338c894929bd75606619e99d",
"main.dart.js": "e26f73a33c361d9b0b53414ea9fb639a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b5634d4318bd186be89ab8ee8123fe9",
"assets/AssetManifest.json": "8b098d50fec44ec75c22c585290035ce",
"assets/NOTICES": "0da1bb66ecf195531c811b50585419a3",
"assets/env.lcl": "c5253ad4035874fc3980e1594ba97456",
"assets/FontManifest.json": "fc2ac3061e6e95ebc02b7994c706a9dd",
"assets/AssetManifest.bin.json": "3daaf63c02635c7237271304ebd7e3e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "13060916f58f31bafa83dcb733963cc8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "990724dcb84c6281264ebcc665ee81f7",
"assets/fonts/MaterialIcons-Regular.otf": "f0a08397e9a6b1a1f41a03898ee0b0d8",
"assets/assets/images/undraw/undraw.txt": "fdd339721f67bcf84675bbebfbc1bc81",
"assets/assets/images/undraw/undraw_no_data_re_kwbl.svg": "4e061a5acf25e48e021e1ddfb6af3cd8",
"assets/assets/images/undraw/color.txt": "29cb6356483c95852dc4c14c97a20d64",
"assets/assets/images/fluentui/gear_3d.png": "78187ff23ed81fe9b301858d336622ca",
"assets/assets/images/fluentui/information_3d.png": "0e92f5da9c32e84fbc8149b7c00c289d",
"assets/assets/images/fluentui/page_with_curl_3d.png": "c4002afc614e2e29b915e736d4a867d7",
"assets/assets/images/fluentui/card_index_3d.png": "dafd35ae82e2e137394462ca35a173a0",
"assets/assets/images/fluentui/police_car_light_3d.png": "b03d32de0a87310b00c3e3c8f8aa0ec8",
"assets/assets/images/fluentui/card_file_box_3d.png": "7a49948388d49b8052c8ffe96c1ca387",
"assets/assets/images/fluentui/artist_palette_3d.png": "1add3817079cd608ec6d31225e4c21be",
"assets/assets/images/fluentui/card_index_dividers_3d.png": "85dc732937c5682b7b4bfc93e065ef6a",
"assets/assets/images/fluentui/door_3d.png": "9df15b90564531b893aa9155e9a5ab49",
"assets/assets/images/fluentui/red_circle_3d.png": "8de686c49a2f4671cf3c144961b51e9c",
"assets/assets/images/fluentui/envelope_3d.png": "9976ad65a9cb2f7d70d5f4a10b787829",
"assets/assets/images/fluentui/memo_3d.png": "06db0a334dd2b500b35a0db5e27a0979",
"assets/assets/images/fluentui/open_file_folder_3d.png": "fff8643ed07c3f892a0a0562e8f0c36b",
"assets/assets/images/fluentui/bell_3d.png": "093b5627f9f0b020a27ab8ab1e2420f6",
"assets/assets/images/fluentui/link_3d.png": "41d236530218914b654cfad879203372",
"assets/assets/images/fluentui/scroll_3d.png": "2e4af2011b2eed09fee9543b7385b790",
"assets/assets/images/fluentui/fountain_pen_3d.png": "7cd859e652e7fb2cf04a3c9c89008b0c",
"assets/assets/images/fluentui/wastebasket_3d.png": "127049d83be92332b8d67f8595018ea0",
"assets/assets/images/fluentui/loudspeaker_3d.png": "18ee6c7678a76eb27c3e89e4439cb034",
"assets/assets/images/fluentui/file_folder_3d.png": "27059a05e6670d29cf1cd6b5ca73aafe",
"assets/assets/images/fluentui/clipboard_3d.png": "4597de6485fcc9cd22446623e38b2c04",
"assets/assets/images/fluentui/person_3d_default.png": "f16b621b9391f768ef2e06470bec9ea3",
"assets/assets/images/fluentui/envelope_with_arrow_3d.png": "c29bff7f3291b3ec24b46f9f3e870266",
"assets/assets/images/fluentui/calendar_3d.png": "3bf1850335c15d6939e9f09e7cfa40c6",
"assets/assets/images/fluentui/blue_circle_3d.png": "cc1bc4c2429b9f52bdcd952add4817ad",
"assets/assets/images/logo/logo_dark.png": "710655df560ee7c2bab95993f1a3d5b5",
"assets/assets/images/logo/splash_android12_light.png": "b3503232ef6dcef5af6bc1b44981961e",
"assets/assets/images/logo/logo_light.png": "99aba5cbd91ac2c50e31ca99b81ebefb",
"assets/assets/images/logo/splash_android12_dark.png": "0b83d603fb98eebe1cb0f5fa8e4cf826",
"assets/assets/fcm_key.json": "7c1fb50309d17d0d26756b320d4c807d",
"assets/assets/fonts/Pretendard-Medium.ttf": "7305f90c923d4409825ec2f4380b63d6",
"assets/assets/fonts/Pretendard-Black.ttf": "51c73880d5964b36e6373b3fe31f3058",
"assets/assets/fonts/Pretendard-Regular.ttf": "d6e0de06bff8b7fda2db4682168e3ddf",
"assets/assets/fonts/Pretendard-Thin.ttf": "8b65a9299b173e635e6acac200e80257",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "2f39a307ce00aa5e734137d4cee3b5c1",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "459eff7ba5380583ccd6eda49c846c85",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "332e9b673b0c1709e93fee01e4543f1d",
"assets/assets/fonts/Pretendard-Bold.ttf": "dfb614ebecd405875f50a918ca11c17c",
"assets/assets/fonts/Pretendard-Light.ttf": "77ecd2ca94928e38ff7c68bb255324f7",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "70dff62866dad57adfa8fdcfbfa9e32a",
"canvaskit/canvaskit.js.symbols": "97eb9dce6e1aa2d2f51b682d760b5268",
"canvaskit/skwasm.wasm": "a4d6083d7b7a0c752efa8504acad9684",
"canvaskit/chromium/canvaskit.js.symbols": "6bfaf09bff4a9924a02e56012495db25",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "3084d60ab9c4ca006d779a1a54ddd518",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "c1a52b2a117df2e517bd45c4b0bd091e",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
