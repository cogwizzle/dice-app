dev:
	cp -R vendor/ public/.
	php -S localhost:8000 -t public/

tailwind:
	npm run build:tailwind
