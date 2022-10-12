# CRA-P12

## A Professional Starter Create React App (CRA) with P12 Template

A quick starter [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with P12 including:

- React v18.2.0
- Type Checker - TypeScript ^4.8.4
- Preprocessors - Less
- State management - Recoil
- CSS — Tailwind CSS
- Router - React Router
- Unit Testing - Jest & Enzyme + Sinon
- E2E Testing - Jest & Puppeteer
- Folder structure
- Generate templates
- Format & Lint - ESLint & Prettier
- Useful utilities - Moment, Classnames, Serve, react-snap, React-Helmet, Analyzer Bundle, react-uuid.

Custom Templates, format, and ESLint configurations.
The original Create React App README available [here](./README_CRA.md).

## Usage

```bash
yarn create react-app your-project-name --template p12
```

Or;

```bash
npx create-react-app your-project-name --template p12
```

`npx` package runner tool installs the most recent stable version of CRA from npm. (npx comes out of the box with npm 5.2+)

`--template` parameter points to this template, note that `cra-template-` prefix will be omitted.

## Run Scripts

Inside the project directory run using `npm` or `yarn`:

- `start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `test` - launches the test runner in the interactive watch mode.
- `build` - builds the app for production to the `build` folder.
- `build:serve` - run a local static build using the production build using serve library. Install `npm install -g serve`.
- `build:profile` - profiling production build.
- `eject` - exposes content of `react-script` package
- `lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `lint:fix` - fix lints issues according to style guide set.
- `prettify` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `test:e2e` - run e2e integration testing with the help of Jest & Puppeteer.
- `test:e2e-watch` - same as test:e2e just with a watcher.
- `test:e2e-alone` - stand-alone e2e integration testing NodeJS script for testing using Puppeteer.
- `test:debug` - debug your jest tests using the debugger statement, more info [here](https://medium.com/react-courses/six-best-debugging-options-to-crush-your-reacts-bugs-like-a-champion-70b11b6a1a2d).
- `coverage` - this test is to create a coverage report at needs extra setting in order to work as expected.
- `analyze` - source-map-explorer to Analyzer Bundle.
- `analyzer` - uses cra-bundle-analyzer to Analyzer Bundle.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

## Router + State Management

Router via React Router v5.2.0 and is set on 'AppRouter.tsx' and included in 'index.tsx', read [here](https://medium.com/react-courses/how-to-integrate-routing-in-typescript-project-with-react-router-v5-2-0-a6b0ab160a1b).

The code is set for [Recoil](https://medium.com/react-courses/integrate-recoil-with-typescript-to-share-your-state-across-react-components-8cf1a3910fae)

## Coverage

To set coverage we can use Jest. Jest allow us to create reports in different format and set where we want to collect these reports from (or not collect them from), as well as ensure the coverageThreshold. Take a look at my 'package.json' settings;

To get testing coverage report, you need to include the following settings in your 'package.json' file;

```
// package.json
"jest": {
  "coverageReporters": [
    "json",
    "text",
    "html",
    "lcov"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*/*.d.ts",
    "!src/**/*/Loadable.{js,jsx,ts,tsx}",
    "!src/**/*/types.ts",
    "!src/**/store.ts",
    "!src/index.tsx",
    "!src/serviceWorker.ts",
    "!<rootDir>/node_modules/",
    "!**/templates/**",
    "!**/template/**"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 50,
      "functions": 50,
      "lines": 50,
      "statements": 50
    }
  }
```

In this example, I am enforcing 50% 'coverageThreshold', when I set these it can ensure that I am testing in within my threshold or get an error. That can come handy, because we can set these setting to ensure that every single function, statement, lines and branches get at least 50% or even set it to 100% test coverage.

## E2E Testing

E2E testing provided by Jest & Puppeteer. Check the E2E folder for stand-alone and testing app.test.tsx component. You can read more about it [here](https://medium.com/react-courses/deliver-quality-software-reduce-qa-load-integrate-end-to-end-e2e-testing-on-cra-react-a20486a39ac2?sk=c9610ea9812363b262f141f1c30ae445).

To run the E2E stand-alone and Jest & Puppeteer tests run;

`$ yarn test:e2e`

And;

`$ yarn test:e2e-alone`

## Eslint configurations

Lint set according to Airbnb style guide — as part of their style guide. Feel free to tweak `.eslintrc`.

## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated settings, feel free to [tweak prettier rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc` to match your code style.

## Configure Components Templates

[generate-react-cli](https://github.com/arminbro/generate-react-cli) help speed up productivity in React projects, feel free to tweak rules inside the config file `generate-react-cli.json` to match your needs.

## Optimizing

- Prerender - almost static pages using `react-snap`. See comments in: `src/index.tsx`;
- Precache - src/index.tsx > `serviceWorker.register()`
- Analyzer Bundle - `yarn add -D cra-bundle-analyzer` -> Create the report: `npx cra-bundle-analyzer`

Read more about optimizing in [this article](https://medium.com/react-courses/optimize-react-app-best-optimzing-techniques-i-wish-i-knew-before-i-wrote-my-first-line-of-code-2b4651f45a48).

## Analyzing the Bundle Size

‘bundle-analyzer’ (https://github.com/svengau/cra-bundle-analyzer), is my prefer bundle analyzer, it's more colorful and includes all the bundles in one page instead of calling them one by one with source-map-explorer.

Install (yarn add --dev cra-bundle-analyzer) & you use the run script:

```
$ yarn analyzer
```

Other option is to use source-map-explorer (yarn add --dev source-map-explorer);

```
$ yarn analyze
```
