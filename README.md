# Setup

```
sudo npm install -g jspm
npm install
```

# Editing

Use Visual Studio Code v1.5 or later.
When editing *.tsx files use Typescript inside the repo and not the Typescript shipped with VSCode.

# Adding library

To make jspm and editor happy

```
jspm install <lib>
jspm install --dev npm:@types/<lib>
npm install -D <lib> @types/<lib>
```

Also add `<lib>` to types array in compilerOptions of tsconfig.json file.

## Manual external Typescript declaration

In library has no declaration in npm:@types repository.

1. Write your own TypeScript declaration file and store it in `@types/<lib>/index.d.ts` file.
2. Install in jspm with `jspm install <lib>`
3. Install in npm with `npm install -D <lib>`
4. Add `<lib>` to types array in compilerOptions of tsconfig.json file.
5. Add `@types/<lib>/index.d.ts` to files array in tsconfig.json
6. Add key `<lib>` and value `@types/<lib>/index.d.ts` to typescriptOptions.types object in jspm.config.js file

## Libary has no main specified and uses global

Instal in jspm with
```
jspm install <name>=<target> -o "{format: 'global', main: '<main file>'
```

Where:

* name: how you want to import it with `import <name>`
* target: valid jspm target like github:mylib/mylib
* main file: The main file to include when import is used

For example:
```
jspm install 3Dmol=github:3dmol/3Dmol.js -o "{format: 'global', main: 'release/3Dmol-min.js'}"
```

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
* Fetch ligands from json file
* Embed 3dmol (or litemol) to render molecules in 3D
* Single tsconfig
* Use redux to toggle visibility of molecules
* Use redux-thunk to load molecules from server
* Use Server Sent Events to listen for events from server, also added development buttons to simulate server events.

# TODO

* Use production version of karma-jspm with coverage support instead of pull request https://github.com/Workiva/karma-jspm/pull/178
* Single install of library and it's types, now it's installed in jspm and npm
* linting with eslint
* api doc generation with typedoc, atm typedoc chokes on typescript 2.0 config https://github.com/TypeStrong/typedoc/issues/303
* Speed up development cycle by using watchers, aka changed file should trigger tslint, karma run, hot reload of page
* Speed up loading development page, atm transpilation is done in browser and over 370 network requests are made
* Add to Travis-CI
* Add to Codacy with code coverage
* Easier manual external declaration inclusion
* Minify app bundle