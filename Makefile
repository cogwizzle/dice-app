dev:
	php -S localhost:8000 -t public/

tailwind:
	npm run build:tailwind

service-worker:
	workbox generateSW workbox-config.js

