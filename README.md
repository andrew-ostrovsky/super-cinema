# Super cinema
Movie catalog app example, built with:
* Client make calls to load data from API server
* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 magic
* [Webpack](http://webpack.github.io) for bundling
* [Redux](https://github.com/rackt/redux)
* [style-loader](https://github.com/webpack/style-loader), [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css and less
* [Socket.io](https://github.com/socketio/socket.io) live comments!
* [MongoDB](https://docs.mongodb.com/getting-started/shell/introduction/)
* [mongoose](https://github.com/Automattic/mongoose) Elegant mongodb object modeling for node.js

## Getting Started

Clone this repo using:
```bash
git clone https://github.com/andrew-ostrovsky/super-cinema
```


## Installation

1. Install NodeJS and NPM
1. Install MongoDB
    > https://www.mongodb.com/download-center#community

```bash
npm install
```

## Building and Running Production Server
To start MongoDB, issue the following command at the system shell:<br>

Specify database folder `db/` path with `--dbpath` option.
```bash
mongod --dbpath "path/to/project/db"
```

```bash
npm run build
```

1. Run `mongoimport --jsonArray -d yourDatabaseNameHere -c movies --file path/to/project/app/static/movies.json` to initialize the mongoDB
    > *requried only once, default database name is `test`
1. At this point you can run `npm run start-server` to see the example app at `http://localhost:8080`.*
