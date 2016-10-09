

# Adding library

To make jspm and editor happy

```
jspm install <lib>
jspm install --dev @types/<lib>
npm install -D <lib> @types/<lib>
```

Also add `<lib>` to types array in tsconfig.json file.

# Unit test

```
npm test
```

# Linting

```
npm run tslint
```

# DONE

* jspm + typescript + react
* Typescript declerations using @types instead of typings or `/// <reference`
* Styling using bootstrap and react-bootstrap
* Unit test using mocha/chai
* Karma runner using Chrome with reporting and coverage

# TODO

* Use production version of karma-jspm with coverage support instead of pull request https://github.com/Workiva/karma-jspm/pull/178
* Use bundles (vendor + app) for distro
* Single install of library and it's types, now it's installed in jspm and npm
* linting with tslint and eslint
* api doc generation with typedoc