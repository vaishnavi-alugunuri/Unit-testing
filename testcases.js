const { expect } = require('chai');
const ArrayList = require('../ArrayList');

describe('ArrayList', function() {
    let arrayList;

    beforeEach(function() {
        arrayList = new ArrayList();
    });

    it('should add and get elements', function() {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.get(0)).to.equal(1);
        expect(arrayList.get(1)).to.equal(2);
        expect(arrayList.get(2)).to.equal(3);
    });

    it('should throw an error when getting index out of bounds', function() {
        expect(() => arrayList.get(0)).to.throw('Index out of bounds');
        arrayList.add(1);
        expect(() => arrayList.get(1)).to.throw('Index out of bounds');
    });

    it('should remove elements', function() {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.remove(1)).to.equal(2);
        expect(arrayList.get(1)).to.equal(3);
        expect(arrayList.size()).to.equal(2);
    });

    it('should throw an error when removing index out of bounds', function() {
        expect(() => arrayList.remove(0)).to.throw('Index out of bounds');
        arrayList.add(1);
        expect(() => arrayList.remove(1)).to.throw('Index out of bounds');
    });

    it('should return the correct size', function() {
        expect(arrayList.size()).to.equal(0);
        arrayList.add(1);
        expect(arrayList.size()).to.equal(1);
        arrayList.add(2);
        expect(arrayList.size()).to.equal(2);
        arrayList.remove(1);
        expect(arrayList.size()).to.equal(1);
    });

    it('should throw an error for negative index', function() {
        arrayList.add(1);
        expect(() => arrayList.get(-1)).to.throw('Index out of bounds');
        expect(() => arrayList.remove(-1)).to.throw('Index out of bounds');
    });
});
