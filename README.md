# StencilJS Boilerplate

This is a blank starter project for building web applications and sites using [StencilJS](https://stenciljs.com/). It includes SASS compiler and task runner.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

To start a new project using this boilerplate, clone this repo to a new directory:

```bash
git clone https://github.com/Beclamide/stenciljs-boilerplate.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
```

## Development

To launch the development server run: 

```bash
npm start
```

Your default web browser will launch and changes to files are watched.

## Tasks
This project includes [stencil-tasks](https://github.com/Beclamide/stencil-tasks) to help automate various tasks. You can run them from the command line:

```bash
npm run task --create my-component
npm run task --route my-route
```

For more information about the available commands, check out the [README](https://github.com/Beclamide/stencil-tasks/blob/master/README.md)


## Running the tests

Tests are written with [Jest](https://facebook.github.io/jest/)

```bash
npm run test
```


## Building the project

To build the code run: 

```bash
npm run build
```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **John Bower** - *Initial work* - [Beclamide](https://github.com/Beclamide)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details