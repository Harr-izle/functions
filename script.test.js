
const {greet, add, reverse} = require('./script');

test('greet', () => {
    expect(greet('World')).toBe('Hello, World!');
});

test('add', () => {
    expect(add(1, 2)).toBe(3);
})

test('reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})