const Math = require('../src/math.js');
const expect = require('chai').expect;

let numbers = 0

describe('Math class', function () {

    before(function () {
        numbers = {
            n1: 0,
            n2: 10,
            n3: 5, 
        }
    })

    it('Sum numbers', function () {
        const math = new Math();

        expect(math.sum(...Object.values(numbers))).to.equal(15);
    })

    it('Calculate the average', function (done) {
        const math = new Math();

        math.average(value => {
            expect(value).to.equal(5);
            done();
        }, ...Object.values(numbers))
    })
})