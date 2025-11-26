export function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const basePath = (import.meta.env.BASE_URL || '/');
        const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
        const serviceWorkerPath = `${normalizedBase}service-worker.js`;

        navigator.serviceWorker
          .register(serviceWorkerPath, { scope: normalizedBase })
          .then((registration) => {
            console.log('Service Worker registered successfully:', registration.scope);
            
            setInterval(() => {
              registration.update();
            }, 60000); // Check every minute
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }
