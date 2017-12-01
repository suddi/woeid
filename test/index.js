'use strict';

const expect = require('chai').expect;

const woeid = require('../lib');

describe('Testing WOEID', function () {
    context('Testing getWoeid()', function () {
        it('CASE 1: Should handle correct ISO 3166 Alpha2 country', function () {
            const input = 'FR';
            const expectedResult = {
                'country': 'France',
                'woeid': 23424819,
                'iso-3166-alpha3': 'FRA',
                'iso-3166-alpha2': 'FR'
            };

            const result = woeid.getWoeid(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 2: Should handle incorrect ISO 3166 Alpha2 country', function () {
            const input = 'XX';
            const expectedResult = undefined;

            const result = woeid.getWoeid(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 3: Should handle correct ISO 3166 Alpha3 country', function () {
            const input = 'FSM';
            const expectedResult = {
                'country': 'Micronesia, Federated States of',
                'woeid': 23424815,
                'iso-3166-alpha3': 'FSM',
                'iso-3166-alpha2': 'FM'
            };

            const result = woeid.getWoeid(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 4: Should handle incorrect ISO 3166 Alpha3 country', function () {
            const input = 'XXZ';
            const expectedResult = undefined;

            const result = woeid.getWoeid(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 5: Should handle empty call', function () {
            const expectedResult = undefined;

            const result = woeid.getWoeid();

            expect(result).to.deep.eql(expectedResult);
        });
    });

    context('Testing getCountry()', function () {
        it('CASE 1: Should handle correct WOEID', function () {
            const input = 24549828;
            const expectedResult = {
                'country': 'Saint Pierre and Miquelon',
                'woeid': 24549828,
                'iso-3166-alpha3': 'SPM',
                'iso-3166-alpha2': 'PM'
            };

            const result = woeid.getCountry(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 2: Should handle incorrect WOEID', function () {
            const input = 12131119;
            const expectedResult = undefined;

            const result = woeid.getCountry(input);

            expect(result).to.deep.eql(expectedResult);
        });

        it('CASE 3: Should handle empty call', function () {
            const expectedResult = undefined;

            const result = woeid.getCountry();

            expect(result).to.deep.eql(expectedResult);
        });
    });
});
