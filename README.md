# repro for "`@remix-run/dev required in production`"

### 1) install, build, start (in development mode)
```
yarn && yarn build && yarn start
```
this works!

```
yarn install v1.22.19
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
success Saved lockfile.
Done in 3.17s.
yarn run v1.22.19
$ remix build
Building Remix app in production mode...
Built in 452ms
Done in 1.45s.
yarn run v1.22.19
$ remix-serve build
Remix App Server started at http://localhost:3000 (http://10.23.2.100:3000)
```
everything ok!

### 2) install in production mode, start
```
yarn install --production --frozen-lockfile && yarn start
```
this fails!

```
yarn install v1.22.19
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
Done in 1.87s.
yarn run v1.22.19
$ remix-serve build
Error: Cannot find module 'is-plain-obj'
Require stack:
- /tmp/foo/build/index.js
- /tmp/foo/node_modules/@remix-run/serve/dist/cli.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)
    at Function.Module._load (node:internal/modules/cjs/loader:833:27)
    at Module.require (node:internal/modules/cjs/loader:1057:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (/tmp/foo/build/index.js:270:136)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Module.require (node:internal/modules/cjs/loader:1057:19)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

### 3) like 2 but with `@remix-run/dev` in production `dependencies`
```
yarn add @remix-run/dev --production && yarn start
```
```
yarn add v1.22.19
[1/5] Validating package.json...
[2/5] Resolving packages...
[3/5] Fetching packages...
[4/5] Linking dependencies...
[5/5] Building fresh packages...
warning "@remix-run/dev" is already in "devDependencies". Please remove existing entry first before adding it to "dependencies".
success Saved 1 new dependency.
info Direct dependencies
└─ @remix-run/dev@1.12.0
info All dependencies
└─ @remix-run/dev@1.12.0
Done in 5.26s.
yarn run v1.22.19
$ remix-serve build
Remix App Server started at http://localhost:3000 (http://10.23.2.100:3000)
```
