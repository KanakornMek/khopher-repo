# Monorepo boilerplate by khopher team

This repo is using monorepo architecture.
There is some interaction between services.
There is also typesafety between services and shared packages.

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app run on localhost:3000
- `backend`: Express JS backend run on localhost:5000
- `@khopher-repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@khopher-repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@khopher-repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Monorepo uses some additional tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd khopher-repo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd khopher-repo
pnpm dev
```
