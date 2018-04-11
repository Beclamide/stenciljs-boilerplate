# Stencil App Boilerplate

This is a blank starter project for using StencilJS with SASS.


## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/Beclamide/stenciljs-boilerplate.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during development, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```


## Tasks

This project includes [stencil-tasks](https://github.com/Beclamide/stencil-tasks) to help automate various tasks. You can run them from the command line:

```
$ npm run task --create my-component
```

For more information about the available commands, visit the [stencil-tasks](https://github.com/Beclamide/stencil-tasks) repo and check out the README
