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

install eslint globally:
```
npm install eslint -g
npm install eslint-plugin-react -g
```

intialize eslint:
```
eslint --init

answers:
* ? Are you using ECMAScript 6 features? Yes
* ? Are you using ES6 modules? Yes
* ? Where will your code run? Browser
* ? Do you use CommonJS? No
* ? Do you use JSX? Yes
* ? Do you use React? Yes
* ? What style of indentation do you use? Spaces  
* ? What quotes do you use for strings? Single
* ? What line endings do you use? Unix
* ? Do you require semicolons? Yes
* ? What format do you want your config file to be in? JSON
```

run eslint:
```
eslint src/** src/**/**
```

configure eslintrc.JSON
```
"rules": {
    "react/jsx-key": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2,
    "react/no-multi-comp": 2,
    "react/jsx-indent-props": [
        "error",
        2
      ],
    "react/jsx-pascal-case": 2,
    "react/prop-types": 2,
    "react/jsx-indent": [
        "error",
        2
    ],
```
add linting to package.JSON
```
"scripts": {
    "lint": "eslint src/** src/**/**; exit 0",
    "lint-fix": "eslint src/** src/**/** --fix; exit 0"
```
install eslint loader
```
npm install eslint-loader --save-dev
```
update webpack.config.js
```
test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          emitWarning: true,
          configFile: "./.eslintrc.json"
          }
        },
        {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", {"modules": false}],
            "react",
          ],
          plugins: [
            "react-hot-loader/babel"
```
