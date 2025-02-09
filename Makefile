install: deps-install
	npx simple-git-hooks

publish:
	npm publish --dry-run

test:
	npm test

report: 
	npx jest --coverage

lint:
	npx eslint .

fix:
	npx eslint --fix .

.PHONY: test
