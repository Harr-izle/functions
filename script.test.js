
const {greet, add} = require('./script');

test('greet', () => {
    expect(greet('World')).toBe('Hello, World!');
});

test('add', () => {
    expect(add(1, 2)).toBe(3);
})