[![Build Status](https://travis-ci.org/GMV-centravet/materials-site.svg?branch=master)](https://travis-ci.org/GMV-centravet/materials-site) 
[![Netlify Status](https://api.netlify.com/api/v1/badges/9d36e9a9-2ac9-4eed-afe5-9ff2bbd14f95/deploy-status)](https://app.netlify.com/sites/materials-components/deploys)

# Materials Site

The [Materials Site](https://materials-components.netlify.com) is the place where you can find demos and documentation for the [Materials](https://github.com/GMV-centravet/materials) UI components collection.

>Note: Documentation and demos are work in progress, we plan to extend it as soon as possible. In the meantime, you can dig into the [source code](https://github.com/GMV-centravet/materials).

This app is build upon [Stencil](https://stenciljs.com/), an awesome compiler that generates Web Components !

It also use [Vaadin Router](https://vaadin.com/router), a small, powerful and framework-agnostic client-side router for Web Components.

## Getting Started

To start developing, clone this repo, then run ```npm install ``` and ``` npm start```, it will launch the site in dev mode.


## Production

To build for production, run:

```bash
npm run build
```

A production build includes:

* Minified code bundles
* Generated Service workers
* App manifest

## Unit Tests

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```

## License

 - [MIT](https://raw.githubusercontent.com/ionic-team/stencil-site/master/LICENSE)