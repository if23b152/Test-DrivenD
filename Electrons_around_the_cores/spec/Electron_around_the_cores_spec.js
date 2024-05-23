const electronsAroundTheCores = require('../src/Electrons_around_the_cores');

describe('Electrons around the cores', () => {
    it('should return 20 for [5, 2, 3, 3, 1, 6]', () => {
        expect(electronsAroundTheCores([5, 2, 3, 3, 1, 6])).toBe(20);
    });

    it('should return 11 for [3, 6, 1, 1]', () => {
        expect(electronsAroundTheCores([3, 6, 1, 1])).toBe(11);
    });

    it('should return 10 for [2, 3, 4, 1]', () => {
        expect(electronsAroundTheCores([2, 3, 4, 1])).toBe(10);
    });

    it('should return 19 for [6, 6, 1, 6]', () => {
        expect(electronsAroundTheCores([6, 6, 1, 6])).toBe(19);
    });

    it('should return 12 for [2, 4, 6]', () => {
        expect(electronsAroundTheCores([2, 4, 6])).toBe(12);
    });

    it('should return 15 for [1, 3, 4, 2, 5]', () => {
        expect(electronsAroundTheCores([1, 3, 4, 2, 5])).toBe(15);
    });
});
