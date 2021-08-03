## What You're Getting
```bash
├── webpack.prod.js
├── webpack.dev.js
├── README.md - This file.
├── package.json # npm package manager file.
├── .gitignore # this file includes all files that shouldn't be uploaded to git repo .
├── .env # enviroment variables .
├── .babelrc # enviroment variables .
├── src
│    ├── client
│    │    └── js
│    │    │    └── formHandler.js
│    │    │    └── nameChecker.js
│    │    └── styles
│    │    │    └── base.scss
│    │    │    └── footer.scss
│    │    │    └── form.scss
│    │    │    └── header.scss
│    │    │    └── resets.scss
│    │    └── views
│    │    │    └── index.html
│    │    └── index.js
│    │
│    └── server
│        └── index.js # express server.
└── __test__ 
        └── handleSubmit.test.js # tests handleSubmit function .
```
## Table of Contents

1. [Start](#install)
2. [Configrations](#introduction)
3. [API calls](#concepts)
4. [Testing](#contributing)

 <h2 align="center">App Start</h2>
 
 Install packages:

```bash
npm install 
```

start the App:

```bash
npm install start
```
 
 <h2 align="center">Configrations</h2>
 Webpack is a bundler for modules. The main purpose is to bundle JavaScript
 files for usage in a browser, yet it is also capable of transforming, bundling,
 or packaging just about any resource or asset.
 
 ### [Loaders](https://webpack.js.org/plugins/)
 Loaders can preprocess files while compiling, e.g. TypeScript to JavaScript, Handlebars strings to compiled functions, images to Base64, etc.
 in this project used (bable,style,css,and sass)loaders
 
 ### [Plugins](https://webpack.js.org/loaders/)
 Highly modular plugin system to do whatever else your application requires.
 in this project used (HtmlWebPackPlugin,CleanWebpackPlugin,Dotenv,and HtmlWebPackPlugin)plugins
 
 <h2 align="center">API calls</h2>
 
* [`handleSubmit`](#handleSubmit)
* [`checkForName`](#checkForName)

### `handleSubmit`

Method Signature:

```js
handleSubmit()
```

* Returns a Promise which resolves to a JSON object containing article discription.
* Update the DOM with recieved response.

### `checkForName`

Method Signature:

```js
checkForName(userInput)
```

* Returns true if the userInput attribute is an actual URL `
* Returns false if userInput is not an actual url.

 <h2 align="center">Testing</h2>
