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
