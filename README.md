ClassicalDB
==============
[![Circle CI](https://circleci.com/gh/classicalmusic/classicalDB.svg?style=shield&circle-token=47bd3ea75dc1ca09812772093c194e1aa608768f)](https://circleci.com/gh/classicalmusic/classicalDB)
[![Coverage Status](http://img.shields.io/coveralls/classicalmusic/classicalDB.svg)](https://coveralls.io/r/classicalmusic/classicalDB?branch=master)

**ClassicalDB is a crowd-sourced classical music metadata platform under active development.
Our goal is to capture all metadata relevant to classical music, and expose it as an
easy to use API for other application developers.**

ClassicalDB consists of 2 major components:

1. A Crowd-sourceed injest/digest system that allows classical music aficionados
to contribute metadata, and improve the quality and accuracy of existing data.

2. A well-defined, easy to use API that other applications can use for retrieving
classical music metadata.

### Use Cases

Here are some example queries that ClassicalDB will accomodate that existing music
metadata services cannot:

1. Find all recordings of the 2nd movement of Beethoven's 5th Symphony conducted
by Wilhelm Furtwängler.

2. Find all the different masterings of a single recording (a given recording may be
mastered in numerous ways and released by different labels).

3. Find all recordings of Chopin's Military Polonaise by second generation students
of Liszt.

By enabling these types of queries, ClassicalDB will enable a new generation of
classical music applications like streaming services, library management/tagging apps,
and relationship data visualization tools.

## Technology Stack
ClassicalDB is built with full-stack JavaScript:

- Node.js and Express.js handle the API interface and serving the JS SPA.

- Front-end client is a Single Page App (SPA) built using React.js and Flux architecture

- Music metadata is stored in PostgreSQL database and modeled using Sequelize ORM

- Authentication is handled by a MongoDB database and modeled using Mongoose ODM

- Back-End Testing uses Mocha, Chai, Superagent

- Front-End Testing uses Jest and Mocha

- Continuous Integration Testing is done through CircleCI

- Code Coverage Testing is done through Istanbul and Coveralls

- Deployment and Build scripts use Gulp and Browserify

- Hosting is done through Heroku

## Roadmap

### Version 0.1 - Labels and CDs
Site:
- Basic design mockup in  Photoshop with "Contribute Data" and "Explore Data" site sections
- User can enter new Label and CD data via website
- User can view list of all Labels (and edit individual entries)
- User can view list of all CDs (and edit individual entries)
- No user authentication yet (and therefore no Mongo/Mongoose functionality)

API:
  - define and document basic interface for labels and CDs
  - developer can perform CRUD operations on labels and CDs
  - create "API Status" endpoints

Schema:

![ClassicalDB Schema - Version 0.1](docs/schema/classicaldb-schema-version-0.1.png?raw=true "ClassicalDB Schema - Version 0.1")


### Future Versions:

Schema:

The following schema will support all relevant metadata for albums
that contain single-instrument and single-performer works that may
be standalone pieces or multi-movement works (like Sonatas):

![ClassicalDB Schema - Future Versions](docs/schema/classicaldb-schema-future-versions.png?raw=true "ClassicalDB Schema - Future Versions")

[Schema Details (Google Sheets)](https://docs.google.com/spreadsheets/d/1FxQLvizvrmzBYEUtPd0RtNt8k5xHa1u3jWsfpLUrx-A/edit?usp=sharing)



<!--
## Project Structure
-->

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

<!--
## Contributing
-->

<!--
## Release History
-->


## Known Issues
- add license information
