self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting();  // Activate the SW immediately
});

self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    logMessageEverySecond();
});

function logMessageEverySecond() {
    setInterval(() => {
        console.log('Logging message every second');
    }, 1000);
}
