# VMSKiosk
This is an experimental kiosk using vueitify as the base framework.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Babel
https://medium.com/front-end-hacking/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987
Babel is a JS transpiler that converts new JS code into old ones.

# ES6? 7?
Which are we using?

# Vue
Works pretty good.

# Vuetify

# Bootstrap

# BootstrapVue
https://bootstrap-vue.js.org/docs/components/layout/

# jQuery

# HTML

# CSS

# PostCSS
Used for autoprefixing

# Webpack
We would also like to use SASS for our styles, PostCSS for autoprefixing. Plus, we would like to minify and uglify both our CSS and Javascript code. Webpack solves all of these problems using one config file (named webpack.config.js) and one CLI command webpack.

Webpack is a modular build tool that has two sets of functionality — Loaders and Plugins. Loaders transform the source code of a module. For example, style-loader adds CSS to DOM using style tags. sass-loader compiles SASS files to CSS. babel-loader transpiles JS code given the presets. Plugins are the core of Webpack. They can do things that loaders can’t. For example, there is a plugin called UglifyJS that minifies and uglifies the output of webpack.

https://webpack.js.org/configuration/

Installed 7/19/18

# npm
The JavaScript node package manager, typically abbreviated in all lowercase as npm, is the default method for managing packages in the Node.js runtime environment. It relies upon a command line client and a database made up of public and premium packages known as the the npm registry. Users can access the registry via the client and browse the many packages available through the npm website. Both npm and its registry are managed by npm, Inc.

# yarn
https://www.keycdn.com/blog/npm-vs-yarn/
Developed by Facebook in attempt to resolve some of npm’s shortcomings. Yarn isn’t technically a replacement for npm since it relies on modules from the npm registry. Think of Yarn as a new installer that still relies upon the same npm structure. The registry itself hasn’t changed, but the installation method is different. Since Yarn gives you access to the same packages as npm, moving from npm to Yarn doesn’t require you to make any changes to your workflow.

Use Chocolatey

choco install yarn

scoop install yarn

Please whitelist your project folder and the Yarn cache directory (%LocalAppData%\Yarn) in your antivirus software, otherwise installing packages will be significantly slower as every single file will be scanned as it’s written to disk.

Despite enabling faster installs, Yarn also adds to your disk space usage since it stores dependencies locally.

# pnpm
Based on benchmarks performed by Intoli, pnpm is indeed faster than both Yarn and npm in many cases. It also doesn’t eat up disk space like Yarn does. That’s because pnpm circumvents having to copy locally cached source files by leveraging hardlinks and symlinks.

# gulp
I don't think it's working. No app/style.css file is being output.

#vue-router

https://appdividend.com/2018/07/13/vue-history-mode-routing-tutorial/ (When using history mode, the URL will look “normal,” )

