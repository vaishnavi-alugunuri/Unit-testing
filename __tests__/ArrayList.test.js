const ArrayList = require('../ArrayList');

describe('ArrayList', () => {
    let arrayList;

    beforeEach(() => {
        arrayList = new ArrayList();
    });

    test('should add and get elements', () => {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.get(0)).toBe(1);
        expect(arrayList.get(1)).toBe(2);
        expect(arrayList.get(2)).toBe(3);
    });

    test('should throw an error when getting index out of bounds', () => {
        expect(() => arrayList.get(0)).toThrow('Index out of bounds');
        arrayList.add(1);
        expect(() => arrayList.get(1)).toThrow('Index out of bounds');
    });

    test('should remove elements', () => {
        arrayList.add(1);
        arrayList.add(2);
        arrayList.add(3);
        expect(arrayList.remove(1)).toBe(2);
        expect(arrayList.get(1)).toBe(3);
        expect(arrayList.size()).toBe(2);
    });

    test('should throw an error when removing index out of bounds', () => {
        expect(() => arrayList.remove(0)).toThrow('Index out of bounds');
        arrayList.add(1);
        expect(() => arrayList.remove(1)).toThrow('Index out of bounds');
    });

    test('should return the correct size', () => {
        expect(arrayList.size()).toBe(0);
        arrayList.add(1);
        expect(arrayList.size()).toBe(1);
        arrayList.add(2);
        expect(arrayList.size()).toBe(2);
        arrayList.remove(1);
        expect(arrayList.size()).toBe(1);
    });

    test('should throw an error for negative index', () => {
        arrayList.add(1);
        expect(() => arrayList.get(-1)).toThrow('Index out of bounds');
        expect(() => arrayList.remove(-1)).toThrow('Index out of bounds');
    });
});
