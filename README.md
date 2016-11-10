This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using scripts package [@nlesc/react-scripts](https://github.com/NLeSC/create-react-app).

* [User Guide](https://github.com/NLeSC/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

# Installation

```
npm install
```

# Development setup

The api/ directory contains an example dataset which can be used during development and testing.
In production the /api url is server by an application server.

1. Start web server on port 2015 to host api/ directory.
```
caddy
```

2. Start development web server

```
npm start
```

Browser should open on http://localhost:3000

# Editing

Use Visual Studio Code v1.5 or later.
When editing *.tsx files use Typescript inside the repo and not the Typescript shipped with VSCode.

# Unit test

```
npm test
```

# Linting

```
npm run lint
```

Enable tslinting inside Visual Studio Code with

1. Open the command palette CRTL + P
2. Run `ext install tslint`

# Deploy

First build with:
```
npm run build
```

Then copy essential build files to deployment target:
```
rsync -a --exclude \*.map --exclude asset-manifest.json build/ <target>/
```

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
* Use redux-saga to load molecules from server
* Use Server Sent Events to listen for events from server, also added development buttons to simulate server events.
* hide/show all ligands/proteins
* initially only show first ligand and protein in 3Dmol viewer
* listen for hilite changes from server
* propagate hilite selection to server

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
* Minify app bundle, or switch from redux-saga to redux-thunk
* Environment flag to toggle debug buttons in navbar using http://jspm.io/0.17-beta-guide/conditional-loading.html
* App bundle should not include jquery, it is already in deps bundle
* mock 3Dmol in tests
* user friendly error when webgl support is missing
* user friendly error when fetch error occurs
