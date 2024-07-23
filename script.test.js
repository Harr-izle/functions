
const {greet, add, reverse,subtract} = require('./script');

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