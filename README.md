Web application to visualize protein with it's natural ligand and candidates.

[![Build Status](https://travis-ci.org/3D-e-Chem/molviewer-tsx.svg?branch=master)](https://travis-ci.org/3D-e-Chem/molviewer-tsx)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e80c537a04c34a508709c839940d5bfe)](https://www.codacy.com/app/3D-e-Chem/molviewer-tsx?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=3D-e-Chem/molviewer-tsx&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/e80c537a04c34a508709c839940d5bfe)](https://www.codacy.com/app/3D-e-Chem/molviewer-tsx?utm_source=github.com&utm_medium=referral&utm_content=3D-e-Chem/molviewer-tsx&utm_campaign=Badge_Coverage)

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

To also get coverage run
```
npm test -- --coverage
```
The coverage reports will be written to `coverage/remapped` directory.

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
./deploy.sh <target>/
```
