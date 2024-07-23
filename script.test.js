
const {greet, add, reverse,subtract, multiply} = require('./script');

test('greet', () => {
    expect(greet('World')).toBe('Hello, World!');
});

test('add', () => {
    expect(add(1, 2)).toBe(3);
})

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})

test('subtract', () => {
    expect(subtract(5, 3)).toBe(2);
})

test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
})