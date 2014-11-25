ClassicalDB
==============
A crowd-sourced classical music metadata platform.

[![Circle CI](https://circleci.com/gh/classicalmusic/classicalDB.svg?style=shield&circle-token=47bd3ea75dc1ca09812772093c194e1aa608768f)](https://circleci.com/gh/classicalmusic/classicalDB)
[![Coverage Status](http://img.shields.io/coveralls/classicalmusic/classicalDB.svg)](https://coveralls.io/r/classicalmusic/classicalDB?branch=master)

## Project Structure

<!-- Overview
```
├── client
│   ├── app                 - All of our app specific components go in here
│   ├── assets              - Custom assets: fonts, images, etc…
│   ├── components          - Our reusable components, non-specific to to our app
│
├── e2e                     - Our protractor end to end tests
│
└── server
├── api                 - Our apps server api
├── auth                - For handling authentication with different auth strategies
├── components          - Our reusable or app-wide components
├── config              - Where we do the bulk of our apps configuration
│   └── local.env.js    - Keep our environment variables out of source control
│   └── environment     - Configuration specific to the node environment
└── views               - Server rendered views

An example client component in `client/app`

main
├── main.js                 - Routes
├── main.controller.js      - Controller for our main route
├── main.controller.spec.js - Test
├── main.html               - View
└── main.less               - Styles

An example server component in `server/api`

thing
├── index.js                - Routes
├── thing.controller.js     - Controller for our `thing` endpoint
├── thing.model.js          - Database model
├── thing.socket.js         - Register socket events
└── thing.spec.js           - Test


FLUX / REACT ARCHITECTURE
.
├── /build/                     # The folder for compiled output
├── /config/                    # Configuration files for Webpack, Jest etc.
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /assets/                # Static files which are copied to ./build on compile
│   ├── /components/            # React components. E.g. Navbar.jsx, Calendar.jsx
│   ├── /constants/             # Enumerations used in action creators and stores
│   ├── /core/                  # Core components (Flux dispatcher, base classes)
│   ├── /images/                # Graphics (.png, .jpg, .svg etc.)
│   ├── /layouts/               # Shared layouts for top-level components
│   ├── /pages/                 # Top-level, URL-bound React components
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /styles/                # CSS style sheets (or LESS, SASS, Stylus)
│   ├── /app.js                 # The application's main file (entry point)
├── /test/                      # Unit, integration and load tests
│   ├── /e2e/                   # End-to-end tests
│   └── /unit/                  # Unit tests
│── gulpfile.js                 # Configuration file for automated builds
└── package.json                # The list of 3rd party libraries and utilities

``` -->

# Local Dependencies


# Contributing


# Release History


# Known Issues


# Backlog
