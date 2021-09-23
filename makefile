#Makefile
install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm link --dry-run
lint:
	npx eslint .
