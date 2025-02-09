install:
 npm install

publish:
	npm publish --dry-run

test:
	npm test

lint:
	npx eslint .

fix:
	npx eslint --fix .

report: 
	npx jest --coverage
