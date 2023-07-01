# JokeApp

Reference: https://github.com/bradtraversy/webpack-starter

Initialize project with package.json => npm init -y

Install webpack, webpack-cli as Dev Dependencies => npm i -D webpack webpack-cli

Add inside package.json file under "scripts" => "build": "webpack --mode production"

Run command => npm run build

By default, webpack is looking for index.js file in src folder as entry file generates output file as main.js into dist folder.

Add file => webpack.config.js

We can change mode, entry and other configuration here in this file.

npm i -D sass style-loader css-loader sass-loader

Configure loaders in webpack.config.js file

npm i -D html-webpack-plugin

Configure pulginin webpack.config.js file

npm i -D webpack-dev-server

Add inside package.json file under "scripts" => "dev": "webpack serve"

Run command => npm run dev

Browse => http://127.0.0.1:8080 or http://localhost:8080

Add "devServer" configuration in webpack.config.js file

Run command => npm run dev

To Clean up hash files -> In webpack.config.js file, under "output" add => clean: true

Source Maps => devtool: 'source-map' (Helps in debugging JS from browser. Creates \*.map.js file in dist folder)

Babel Loader: To make code backward compatiable with older browsers.

npm i -D babel-loader @babel/core @babel/preset-env

Add babel-loader in rule inside webpack.config.js file

Asset Resource Loader. This comes by default in webpack. We just need to add rule in configuration.

npm i axios

Webpack Bundle Analyzer => npm i -D webpack-bundle-analyzer => Configure in webpack.config.js

npm run build
