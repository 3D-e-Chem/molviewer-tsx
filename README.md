# Setup

```
sudo npm install -g jspm
npm install
```

# Editing

Use Visual Studio Code v1.5 or later.
When editing *.tsx files use Typescript inside the repo and not the Typescript shipped with VSCode.

# Adding library

To make jspm and editor happy.

## @types


```
jspm install <lib>
jspm install --dev npm:@types/<lib>
npm install -D <lib> @types/<lib>
```
Also add `<lib>` to types array in compilerOptions of tsconfig.json file and in typescriptOptions of jspm.config.js file.


## Internal TypeScript declaration

A *.d.ts file is included in lib distro.

```
jspm install <lib>
npm install -D <lib>
```

Also in jspm.config.js>typescriptOptions>typings add key:value `<lib>:<name of *.d.ts file`.

## Manual external Typescript declaration

In library has no declaration in npm:@types repository.

1. Write your own TypeScript declaration file and store it in `@types/<lib>/index.d.ts` file.
2. Install in jspm with `jspm install <lib>`
3. Install in npm with `npm install -D <lib>`
4. Add `<lib>` to types array in compilerOptions of tsconfig.json file and in typescriptOptions of jspm.config.js file.
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

* Typescript declerations using @types instead of typings or `/// <reference`
* Unit test using mocha/chai
* Use bundles (deps + app) for distro
* jspm + typescript + angular2
* Styling using bootstrap 
* Fetch ligands from json file using @angular/http promise
* Embed 3dmol (or litemol) to render molecules in 3D

# TODO

* Karma runner using Chrome with reporting and coverage
* Use production version of karma-jspm with coverage support instead of pull request https://github.com/Workiva/karma-jspm/pull/178
* Single install of library and it's types, now it's installed in jspm and npm
* Single tsconfig, atm it is in jspm.config.js and tsconfig.js, Inlining contents of tsconfig.json into jspm.config.js otherwise karma-jspm will error with 404 /tsconfig.json
* linting with eslint
* api doc generation with typedoc, atm typedoc chokes on typescript 2.0 config https://github.com/TypeStrong/typedoc/issues/303
* Speed up development cycle by using watchers, aka changed file should trigger tslint, karma run, hot reload of page
* Speed up loading development page, atm transpilation is done in browser and over 370 network requests are made
* Add to Travis-CI
* Add to Codacy with code coverage
* Easier manual external declaration inclusion
