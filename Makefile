dev:
	php -S localhost:8000 -t public/

service-worker:
	workbox generateSW workbox-config.js
