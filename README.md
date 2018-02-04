## Setting Up this Project
* npm init
* .gitignore
```
.DS_STORE
node_modules
build
```
install dependencies
```
npm install react@15.5.4  --save  
npm install react-dom@15.5.4 --save  
```

install webpack
```
npm install webpack@3.4.0 --save-dev

(and maybe) npm install webpack@3.4.0 -g
```

install babel tools:
* **babel-core**  primary Babel library.
* **babel-loader**  integrate Babel with Webpack.
* **babel-preset-es2015**  transpile our code to ES5.
* **babel-preset-react**  transpile react code
```
npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 --save-dev
```

install Prop types
```
npm install prop-types@15.5.10 --save
```

install development server
```
$ npm install webpack-dev-server@2.5.0 -g
$ npm install webpack-dev-server@2.5.0 --save-dev
```

bundle and serve Project
```
webpack
webpack-dev-server
```

enable hot-swapping
```
 npm install react-hot-loader@3.0.0-beta.7 --save-dev
```

generate index.html
```
npm install html-webpack-plugin@2.29.0 --save-dev
```
