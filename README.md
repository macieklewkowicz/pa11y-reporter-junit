
# Pa11y JUnit Reporter

A JUnit reporter for [Pa11y 5.0](https://github.com/pa11y/pa11y).

[![NPM version][shield-npm]][info-npm]
[![Build status][shield-build]][info-build]
[![LGPL-3.0 licensed][shield-license]][info-license]


## Table Of Contents

- [Requirements](#requirements)
- [Usage](#usage)
  - [Command-Line](#command-line)
  - [JavaScript](#javascript)
- [Contributing](#contributing)
- [License](#license)


## Requirements

Pa11y JUnit Reporter is compatible with Pa11y 5.0. It will not work with older versions of Pa11y.


## Usage

### Command-Line

Install Pa11y and Pa11y CSV Reporter with [npm](https://www.npmjs.com/) (locally or globally is fine):

```sh
npm install -g pa11y pa11y-reporter-junit
```

Run Pa11y using the JUnit reporter:

```sh
pa11y --reporter junit http://example.com
```

### JavaScript

Assuming you've installed both Pa11y and Pa11y JUnit Reporter:

```js
const junit = require('pa11y-reporter-junit');
const pa11y = require('pa11y');

pa11y('http://example.com').then(results => {
    // Returns a string with the results formatted as JUnit XML
    const junitResults = junit.results(results);
    console.log(junitResults);
});
```


## Contributing

There are many ways to contribute to Pa11y JUnit Reporter, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, clone this repo locally and commit your code on a new branch.

Please write unit tests for your code, and check that everything works by running the following before opening a <abbr title="pull request">PR</abbr>:

```sh
make ci
```

You can also run verifications and tests individually:

```sh
make verify              # Verify all of the code (ESLint)
make test                # Run all tests
make test-unit           # Run the unit tests
make test-unit-coverage  # Run the unit tests with coverage
```


## License

Pa11y JUnit Reporter is licensed under the [Lesser General Public License (LGPL-3.0)][info-license].<br/>
Copyright &copy; 2019, Maciej Lewkowicz


[info-license]: LICENSE
[info-npm]: https://www.npmjs.com/package/pa11y-reporter-junit
[info-build]: https://travis-ci.org/macieklewkowicz/pa11y-reporter-junit
[shield-license]: https://img.shields.io/badge/license-LGPL%203.0-blue.svg
[shield-npm]: https://img.shields.io/npm/v/pa11y-reporter-junit.svg
[shield-build]: https://img.shields.io/travis/macieklewkowicz/pa11y-reporter-junit/master.svg
