# React Native Boilerplate

Simple and powerfull React Native starter kit.
Feature based arhitecture with Redux, React Native Navigation, ESlint, Axios and perfect mobile optimized structure.

## Getting Started

npm install
npm start

### Prerequisites

Xcode or Android Studio
Node.js

### Installing

npm install

npm start

react-native run-ios

react-native run-android

### Folder structure
============================

> Boilerplate folder structure

### top-level directory 

    .src
    ├── api                       # api helpers
    ├── assets                    # fonts, colors and images
    ├── components                # common project components
    ├── config                    # store and router configuration files
    ├── features                  # all features related code (containers, actions, reducers, ...) example: Profile, Feed
    ├── styles                    # style for each feature, example: feed-styles.js
  

### Coding styles

Railycoding styles with simple rules: 

```
    "extends": "rallycoding",
    "rules": {
		"arrow-body-style": 0,
		"global-require": 0,
    }
```

## Built With

* "react-native": "0.57.8",
* "react": "16.6.3",
* "react-navigation": "^3.0.8",
* "react-redux": "^6.0.0",
* "redux-logger": "^3.0.6",
* "redux-thunk": "^2.3.0",
* "axios": "^0.18.0"

## Authors

* **Adnan Sahinovic** - [adnxy](https://github.com/adnxy)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
