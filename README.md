

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