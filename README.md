

# Adding library

To make jspm and editor happy

```
jspm install <lib>
jspm install --dev npm:@types/<lib>
npm install -D <lib> @types/<lib>
```

Also add `<lib>` to types array in compilerOptions of tsconfig.json file and in typescriptOptions of jspm.config.js file.

# Unit test

```
npm test
```

# Linting

```
npm run tslint
```

Enable tslinting inside Visual Studio Code with

1. Open the command palette CRTL + P
2. Run `ext install tslint`

# Build distro

```
npm run dist
```

The `dist/` directory contains the application in transpiled/concatenated/minified format.

# DONE

* jspm + typescript + react
* Typescript declerations using @types instead of typings or `/// <reference`
* Styling using bootstrap and react-bootstrap
* Unit test using mocha/chai
* Karma runner using Chrome with reporting and coverage
* Linting using tslint with jsx rules
* Use bundles (deps + app) for distro

# TODO

* Use production version of karma-jspm with coverage support instead of pull request https://github.com/Workiva/karma-jspm/pull/178
* Single install of library and it's types, now it's installed in jspm and npm
* Single tsconfig, atm it is in jspm.config.js and tsconfig.js, Inlining contents of tsconfig.json into jspm.config.js otherwise karma-jspm will error with 404 /tsconfig.json
* linting with eslint
* api doc generation with typedoc, atm typedoc chokes on typescript 2.0 config
* Speed up development cycle by using watchers, aka changed file should trigger tslint, karma run, hot reload of page
* Speed up loading development page, atm transpilation is done in browser and over 370 network requests are made