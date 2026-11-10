// Legacy Yên Tử HR — Service Worker v1
// Mục đích: cho phép Chrome/Edge PWA "Install" (yêu cầu SW cùng origin)
// Không cache gì — cho phép app luôn fetch cloud mới nhất

self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  // KHÔNG intercept — để browser xử lý fetch bình thường
  // Nếu muốn offline-first sau này, implement cache strategy ở đây
  return;
});
