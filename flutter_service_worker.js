'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"version.json": "d88b9ad828d0f8d7a1e770b49233613c",
"assets/assets/images/1.5x/icon_profile.png": "a66125a181cf8271ff5f7dde69a10d86",
"assets/assets/images/1.5x/icon_start.png": "ac7384c7446b666c1ece169f760b84c7",
"assets/assets/images/1.5x/reminder.png": "f1355eea0204237d722076cab9470d0a",
"assets/assets/images/1.5x/icon_settings.png": "5070644263d3b25de8acf93044131971",
"assets/assets/images/1.5x/confirmation.png": "8f7429abfc857792e4c48a79607da517",
"assets/assets/images/1.5x/icon_home.png": "34e3512a6799b70d1283a23dd4a1845a",
"assets/assets/images/1.5x/tip.png": "acf2c797fc7628df47a6ca2819a636d0",
"assets/assets/images/1.5x/icon_messages.png": "7d701f073400b7aa1ef901784912d936",
"assets/assets/images/2.0x/icon_profile.png": "f4cbf50977a308d5f1d23b8ff35f7a36",
"assets/assets/images/2.0x/icon_start.png": "f5309644d753c7a9c27465ce22624df8",
"assets/assets/images/2.0x/reminder.png": "cd6ff4d52d88688f6ed548a97ae0d197",
"assets/assets/images/2.0x/icon_settings.png": "bd6322a821eab69987da6abe0ca26446",
"assets/assets/images/2.0x/confirmation.png": "06b81759f0ebf5b19c693cde23ce3c16",
"assets/assets/images/2.0x/icon_home.png": "9b49aa0f5a4d85af9596c72ea07bae2e",
"assets/assets/images/2.0x/tip.png": "228eedc9fa4f2733460870f7284a1e64",
"assets/assets/images/2.0x/icon_messages.png": "0783ceaf7803e5ec47a757f3b6dde8b7",
"assets/assets/images/3.0x/icon_profile.png": "00e7ab7993003959e028019312b1f5b2",
"assets/assets/images/3.0x/icon_start.png": "c51b825152614a442d5b718b7a91f5c8",
"assets/assets/images/3.0x/reminder.png": "cadae911e679293f003fe1ca306f970a",
"assets/assets/images/3.0x/icon_settings.png": "da77c6a915034b2894c96fb86751c5b2",
"assets/assets/images/3.0x/confirmation.png": "c66646f91db7d19d7501aa3bb114cfdf",
"assets/assets/images/3.0x/icon_home.png": "f1bf6117927f87d533bb2d8b370001a8",
"assets/assets/images/3.0x/tip.png": "e1085edfdeca91a0979a1a39add559ba",
"assets/assets/images/3.0x/icon_messages.png": "a7b8f42473fe5a2bc9b3e4c29f051ab9",
"assets/assets/images/4.0x/icon_profile.png": "a0ce6523cdf86d4039f590c9805a73ca",
"assets/assets/images/4.0x/icon_start.png": "8c661071a3f337c585266be9c44d4b0f",
"assets/assets/images/4.0x/reminder.png": "b57fb5e0c707eb56c6cd7b87b9b7222b",
"assets/assets/images/4.0x/icon_settings.png": "347483e5ef7da2ed4f2ce4486946ba11",
"assets/assets/images/4.0x/confirmation.png": "7abee546d23a20586dd21e05952b875f",
"assets/assets/images/4.0x/icon_home.png": "a535d0bb7e5921ad5423c787de1ae32b",
"assets/assets/images/4.0x/tip.png": "d48a6f5441e325685e0d48b39efa098f",
"assets/assets/images/4.0x/icon_messages.png": "fc91da68dc68fce6b337aca1ed946ac1",
"assets/assets/images/stomach.png": "da4652018d1901fab2b726f9d4c1a901",
"assets/assets/images/stethoscope-2.png": "a53bf8a359b24561bb6a44448cd041b8",
"assets/assets/images/icon_profile.png": "44c2ee61632b334236f06046a43a8106",
"assets/assets/images/hospital.png": "b478d07e4e40bface69ab612abd9b783",
"assets/assets/images/knee.png": "ea5ca11f24f8e09afca180a1d0c37ad6",
"assets/assets/images/icon_start.png": "66ca214288725623c8f11cd6750bc37b",
"assets/assets/images/reminder.png": "a723a3dd0d49799d0e5c7edc44e3ae39",
"assets/assets/images/icon_pill_bottle.png": "db6c167b8a47e5f6824ecf599ded4ac2",
"assets/assets/images/throat.png": "82ff5920ed57767472e786f2210bc24c",
"assets/assets/images/icon_settings.png": "ff8684454ef0d240a462378ea9cfefa0",
"assets/assets/images/icon_man.png": "2ac1b5066520ac5530a6ffe160bb2ec5",
"assets/assets/images/person.png": "447585a71475414d75b0dfea9a8a39f5",
"assets/assets/images/icon_examination.png": "3235a470b24f1040ee0117de9844b328",
"assets/assets/images/icon_no_appointments.png": "d6631baeb2fe6a2503833d6edff02e5a",
"assets/assets/images/confirmation.png": "5e20b095f6943c24cb9e5163aa992709",
"assets/assets/images/medicine.png": "df587c12ea86e4708930b0bc5296408f",
"assets/assets/images/sex.png": "55a9f093490ea195ff72d8e212a99df3",
"assets/assets/images/launcher_ic.png": "bb2b5ad945774d9495dc9f5c463efd4d",
"assets/assets/images/surgeon.png": "77adb933fd51aa0dc482aff92d293ee6",
"assets/assets/images/doctor_profile.jpg": "7ee0e2c6c1b710202f6f50d83bc1fbfa",
"assets/assets/images/hand.png": "f64939a42fa0f38741f08dab463cb367",
"assets/assets/images/ribbon.png": "a2cf3dfbce22e9d7168863a1d452bf76",
"assets/assets/images/glucosemeter.png": "00624e1b2f372e26b1d9bfbfb6d45e0e",
"assets/assets/images/electrocardiogram.png": "6f315f750d9f9e1ca56ea52e47e1859c",
"assets/assets/images/calendar.png": "3f761252578098fbd46792eba8b26c59",
"assets/assets/images/view.png": "b63a2406ce0362e29bba7d45b73a0a90",
"assets/assets/images/icon_doctor_4.png": "74e3cf3f1b8fd4393d8380139bf82638",
"assets/assets/images/healthcare-and-medical.png": "7c036917392b6a9bd758c21fe33637d2",
"assets/assets/images/icon_home.png": "841e6522354d3ffc128f2d6c74c7b91b",
"assets/assets/images/icon_doctor_5.png": "0f52f6929f04bf099c8389b321fadc1d",
"assets/assets/images/icon_doctor_1.png": "a7462e0212cf497381e02df66f153399",
"assets/assets/images/lungs.png": "5e752441db2f244a0380a6e1e9a97b48",
"assets/assets/images/love.png": "2f6dac752b4661f39416a9fe670f0dc5",
"assets/assets/images/icon_doctor_2.png": "67f6f2063eff3cf0c633e61c59f4919c",
"assets/assets/images/tip.png": "cf1684d8311a28c04301683528e67300",
"assets/assets/images/icon_medical_recipe.png": "019d1cad6883f5d28fec53a886bfd2ac",
"assets/assets/images/icon_doctor_3.png": "481854727832e6cb2fc6c2c3b823b524",
"assets/assets/images/thumb_success.png": "4d5d859708dc37db9c1cc09aad49e7a3",
"assets/assets/images/baby.png": "8b69b64938311fc000e82353ec375ea4",
"assets/assets/images/stethoscope.png": "292c61795a740f884ea94d23bc3d53ea",
"assets/assets/images/dental-care.png": "54cfbf0b804b79fa2d834ef91e1addc3",
"assets/assets/images/icon_medical_check_up.png": "dcbbdd62b321637a2884253e8d9f74f5",
"assets/assets/images/pregnant.png": "31e751083c9034cbc89238796d8c4375",
"assets/assets/images/personal-care.png": "12bc2287bd0e7d80ec5667fbb1189b11",
"assets/assets/images/icon_messages.png": "01a81e9dfcd44fcd6399be514b5bde2b",
"assets/assets/languages/it-IT.json": "3dbe2415ee0ee2b75edd497430caca3d",
"assets/assets/languages/es-ES.json": "df0e18558a67ea8ccbeef032f7bfe68e",
"assets/assets/languages/pt-PT.json": "00d32da368192e13ab7e8b6c413d1cf5",
"assets/assets/languages/en-US.json": "f9cae858dde62820560cbb2215910010",
"assets/assets/fonts/CustomIcons.ttf": "64caf37b7f49a015d499d4b2832df9d8",
"assets/assets/fonts/NunitoSans-Bold.ttf": "08e53a516d2ba719d98da46c49b3c369",
"assets/assets/fonts/NunitoSans-Regular.ttf": "4c8f447011eef80831b45edb1e5971e0",
"assets/assets/fonts/NunitoSans-SemiBold.ttf": "bd318b58018198a57723f311627492ac",
"assets/assets/fonts/NunitoSans-Light.ttf": "74d36921be67fb8482bfd7324bd86790",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "bb9591e7b625ff9acd0a1f3406c2a922",
"assets/FontManifest.json": "dfbffac6ce4459c19f18982c344de930",
"assets/NOTICES": "bfa1593c2f0b505c89858cfa7729bc83",
"index.html": "a8a5759890fd0868dd1bb53782400e5a",
"/": "a8a5759890fd0868dd1bb53782400e5a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"main.dart.js": "f183ac29fd5339b0b6c222e84f2b0721",
"manifest.json": "3c45327e9bd26da74b32c543809036a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
