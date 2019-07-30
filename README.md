<p align="center">
<h3 align="center">spacship</h3>

<p align="center">
🚀 Utilities for a wide development world like the universe.
<br>
<a href="[https://pirix-gh.github.io/ts-toolbelt/](https://pirix-gh.github.io/ts-toolbelt/)" target="_blank"><strong>Explore the docs »</strong></a>
<br>
<br>
·
<a href="https://github.com/emplody/spaceship/issues/new?template=bug.md">🐞 Report Bug</a>
·
<a href="https://github.com/emplody/spaceship/issues/new?template=feature.md">🕊 Request Feature</a>
·
<a href="https://github.com/emplody/spaceship/issues/new?template=enchancement.md">🌈 Enhancement</a>
</p>
</p>

<p align="center">
<img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
<a href="https://travis-ci.com/emplody/spaceship" target="_blank">
<img src="https://travis-ci.com/emplody/spaceship.svg?branch=develop">
</a>
<a href="http://makeapullrequest.com/" target="_blank">
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
</a>
<img src="https://img.shields.io/github/license/emplody/spaceship">
<img src="https://img.shields.io/github/issues/emplody/spaceship">
</p>

## Table of Contents

- [🌝 About](#-about)
- [🕊 Features](#-features)
- [🏁 Getting started](#-getting-started)
- [📖 Documentation](#-documentation-)
- [🎁 Contributing](#-contributing)
- [💉 Running tests](#-running-tests)

## 🌝 About

**spaceship** is a utility library for JavaScript developers who make web services.

We want to contribute to **productivity improvement** by providing frequently used functions in the utility.

There are 10 useful utility functions in spaceship 1.0.

## 🕊 Features

### ✨Fetch

**asyncState**

*Easily manage status that pending, success, failure at asynchronous request*

**detectBrowser**

*get browser info to use this info to handle many ituations*

### ✨Browser

**scriptLoader**

*When we want to dynamically import scripts.*

**isMobile**

*Detect the userAgent is Mobile*


### ✨Data

**getPadNumber**

*get formatted number string what you want.*

**normalizeKeyword**

*It can be used in user search keyword case and also it can be used to prevent typos to see accurate results*

**objToParam**

*Sometimes we make url with parameters from object data.*

**paramsToObj**

*when we develop web service, we frequently get data params and change to object*

**toTimeString**

*get TimeStamp from system time stamp*

### ✨Etc

**uniqueKey**

*generate Unique Key ( If you want some salt :)*

## 🏁 Getting started

### **Installation**

**Using npm:**
```bash
$ npm i @emplodies/spaceship
```

If you want to download by selecting the util
```bash
$ npm i @emplodies/spaceship.detect-browser
```
**In a browser:**
```
$ Sorry! Wait For a while. we'll prepare soon.
```

### Hello World
```js
import detectBrowser from "@emplodies/spaceship.detect-browser";
    
// If you use safari,
detectBrowser();
// => 'Safari'
    
// If you use Opera(or OPR)
detectBrowser();
// => 'Opera'
```

## 📖 Documentation

Our library [Spaceship document site](https://spaceship-js.netlify.com/) 


## 🎁 Contributing

Any kind of contribution is welcome. There are many ways to contribute to this project. 

### Question

Questions about the utilities provided by spaceship can be helpful to developers who are experiencing the same difficulty. If you have any questions about using the utility, please leave it as an issue.

We encourage all developers to share their content. :)

### Information

If there is a bug in the existing utility or there is an error in the managed document, please report it as an issue.

It is very helpful in making better open source.

### Add Utils

You can add a utility to spaceship.

When suggesting new features, please follow the procedure below.

1. [New issue](https://github.com/emplody/spaceship/issues/new?template=enchancement.md)

Make new issue with `enhancement` template. And assign three maintainer. 

![readme-1](https://user-images.githubusercontent.com/18658235/62133543-ea6bd300-b319-11e9-9adb-c0be2542d750.png)

2. Check [Contributing Guide](https://github.com/emplody/spaceship/blob/develop/CONTRIBUTING.md). 

3. Fork the project. 

3. Create a pr **feature**  branch
```bash
$ git checkout -b pr/you-new-utils
```
4. [Run the tests](#-running-tests)

5. Open a pull request.

## 💉 Running tests

### **To test utils**
```bash
$ npm run install
$ npm run test
```

When you add your own util to this repo, check these **rules** ✅

1. You must add your util's test
2. Plz maintain all tests are passed 🙏

<img width="580" alt="readme-2" src="https://user-images.githubusercontent.com/18658235/62133545-eb046980-b319-11e9-95f9-fe295ef11477.png">

### **License**

Spaceship is [MIT licensed](https://github.com/emplody/spaceship/blob/develop/LICENSE)