# Nuxt 3 + Vite Module Federation example

This repository showcases how to use Nuxt 3 + Vite with Module Federation.

## Clone repo
```bash
$ git clone --recursive git@github.com:cookies-social-network/frontend-workspace.git
```

### Update submodules 
```bash
$ git fetch --recurse-submodules -j2
```

### After updating the submodule, you need to update the workspace
```bash
$ git add <path/to/submodule>
$ git commit -m "Обновление подмодуля <name-submodule>"
$ git push
```

## Getting started
The repository is structured as a Turbo monorepo, where `host` package is for the Nuxt 3 host and `remote` package is for Vite + Vue-TS generated remote.


In order to get started, you will need npm v20 (version I tested)
```bash
$ corepack enable
```

You can quickly install all the package dependencies using
```bash
$ pnpm i --frozen-lockfile
```

## Building
In order to build the packages, simply run
```bash
$ pnpm build
```
When run on project root, it will build all the packages. When run in `apps/*`, it will build the individual packages.

## Starting
To start the Nuxt3 + Vite host and Vite + Vue remote, use
```cmd
$ pnpm dev
```

As with the build command, you can run it either on project root or on individual package root.

## Exposed applications

Nuxt is exposed at http://localhost:3000.

Vue remote is exposed at http://localhost:5001.

## Troubleshooting

If you still cannot get the project running, [file an issue](https://github.com/jeffpdotone/nuxt-vite-module-federation/issues/new) in case you encounter.

## References

- https://github.com/module-federation/module-federation-examples/tree/master/vite-vue-microfrontends
- https://github.com/phoenix-ru/nuxt3-module-federation-example
