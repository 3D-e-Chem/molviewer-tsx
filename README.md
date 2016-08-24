Visualize protein with it's natural ligand and candidates.

Technical exercise to combine:

* jspm (http://jspm.io)
* react and jsx (https://facebook.github.io/react/)
* typescript (https://www.typescriptlang.org/)
* 3Dmol (http://3dmol.csb.pitt.edu/)

TODO:

* split functionality in multiple components and services/stores
* redux or mobx
* unit tests
* test coverage
* tslint
* tsdoc

# Install

```
sudo npm install -g jspm
npm install
jspm install
```

# Development

Start bundle watcher, will rebuild if any file in src/ dir changes.
```
jspm bundle src/molviewer.tsx -wid
```
In another terminal host directory using a webserver. For example with [caddy](https://caddyserver.com/)
```
caddy
```
Open http://localhost:2015 in web browser.
