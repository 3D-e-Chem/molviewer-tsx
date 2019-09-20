Web application to visualize proteins, ligands and pharmacophores.
Web application is used in [Molviewer KNIME nodes](https://github.com/3D-e-Chem/knime-molviewer).

[![Build Status](https://travis-ci.org/3D-e-Chem/molviewer-tsx.svg?branch=master)](https://travis-ci.org/3D-e-Chem/molviewer-tsx)
[![SonarCloud Gate](https://sonarcloud.io/api/badges/gate?key=e3dchem:molviewer)](https://sonarcloud.io/dashboard?id=e3dchem:molviewer)
[![SonarCloud Coverage](https://sonarcloud.io/api/badges/measure?key=e3dchem:molviewere&metric=coverage)](https://sonarcloud.io/component_measures/domain/Coverage?id=e3dchem:molviewer)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using scripts package [@nlesc/react-scripts](https://github.com/NLeSC/create-react-app).

# Dependencies

* yarn, https://yarnpkg.com/en/

# Installation

```
yarn install
```

# Development setup

The api/ directory contains an example dataset which can be used during development and testing.
In production the /api url is server by an application server.

Start development web server

```
yarn start
```

Browser should open on http://localhost:3000

It will also start a [Caddy web server](https://caddyserver.com/) on port 2015 to host api/ directory.

# Editing

Use Visual Studio Code v1.5 or later.
When editing *.tsx files use Typescript inside the repo and not the Typescript shipped with VSCode.

# Unit test

```
yarn test
```

To also get coverage run
```
yarn test -- --coverage --no-cache -w 1
```
The coverage reports will be written to `coverage/remapped` directory.

# Format

```
yarn prettier
```

Will format files in `src/`.

See https://github.com/prettier/prettier how to setup your editor.

# Linting

```
yarn lint
```

Enable tslinting inside Visual Studio Code with

1. Open the command palette CRTL + P
2. Run `ext install tslint`

# Deploy

First build with:
```
yarn build
```

Then copy essential build files to the knime-molviewer repo:
```
./deploy.sh
```
