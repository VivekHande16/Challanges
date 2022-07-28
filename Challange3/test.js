const getValue = require('./script');

const obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
}


describe("Get Value", () => {
    test('If key is "a/b/c" then "d" shoud be returned', () => {
      expect( getValue(obj, 'a/b/c')).toBe('d');
    });

    test('If key is "a/b/c/d" then "Invalid key" shoud be returned', () => {
        expect( getValue(obj, 'a/b/c/d')).toBe('Invalid key');
    });

    test('If key is "p/b" then "Invalid key" shoud be returned', () => {
        expect( getValue(obj, 'p/b')).toBe('Invalid key');
    });

    test('If obj is anything except object then "Invalid object" shoud be returned', () => {
        expect( getValue(' ', 'a/b/c')).toBe('Invalid object');
    });

    test('If key is undefined then "Invalid key" shoud be returned', () => {
        expect( getValue(obj, '')).toBe('Invalid key');
    });

});