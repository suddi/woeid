'use strict';

const data = require('../data/country');

function getWoeidFromISO2Country(country) {
    for (const d of data) {
        if (country === d['iso-3166-alpha2']) {
            return d;
        }
    }
}

function getWoeidFromISO3Country(country) {
    for (const d of data) {
        if (country === d['iso-3166-alpha3']) {
            return d;
        }
    }
}

function getWoeid(country = '') {
    if (country.length === 2) {
        return getWoeidFromISO2Country(country);
    } else if (country.length === 3) {
        return getWoeidFromISO3Country(country);
    }
}

function getCountry(woeid) {
    if (woeid) {
        for (const d of data) {
            if (woeid === d.woeid) {
                return d;
            }
        }
    }
}

module.exports = {
    getCountry,
    getWoeid
};
