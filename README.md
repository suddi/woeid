# woeid

[![CircleCI](https://circleci.com/gh/suddi/woeid.svg?style=svg)](https://circleci.com/gh/suddi/woeid)
[![codecov](https://codecov.io/gh/suddi/woeid/branch/master/graph/badge.svg)](https://codecov.io/gh/suddi/woeid)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46408c666119432abee43f991b79cc68)](https://www.codacy.com/app/suddir/woeid)
[![npm](https://img.shields.io/npm/v/woeid.svg)](https://www.npmjs.com/package/woeid)
[![npm](https://img.shields.io/npm/dt/woeid.svg)](https://www.npmjs.com/package/eslint-config-suddi)
[![David](https://img.shields.io/david/suddi/woeid.svg)](https://david-dm.org/suddi/woeid)
[![David](https://img.shields.io/david/dev/suddi/woeid.svg)](https://david-dm.org/suddi/woeid?type=dev)
[![license](https://img.shields.io/github/license/suddi/woeid.svg)](https://raw.githubusercontent.com/suddi/woeid/master/LICENSE)

[![codecov](https://codecov.io/gh/suddi/woeid/branch/master/graphs/commits.svg)](https://codecov.io/gh/suddi/woeid)

Compute [Yahoo! Where On Earth IDs](https://developer.yahoo.com/geo/geoplanet/) for all countries.

## Installation

````
npm install --save woeid
````

## Usage

### `getWoeid`

````js
const woeid = require('woeid');

woeid.getWoeid('FRA');
// {
//     'country': 'France',
//     'woeid': 23424819,
//     'iso-3166-alpha3': 'FRA',
//     'iso-3166-alpha2': 'FR'
// }

woeid.getWoeid('FR');
// {
//     'country': 'France',
//     'woeid': 23424819,
//     'iso-3166-alpha3': 'FRA',
//     'iso-3166-alpha2': 'FR'
// }
````

### `getCountry`

````js
const woeid = require('woeid');

woeid.getCountry(23424819);
// {
//     'country': 'France',
//     'woeid': 23424819,
//     'iso-3166-alpha3': 'FRA',
//     'iso-3166-alpha2': 'FR'
// }
````
