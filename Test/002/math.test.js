const math = require('./math');

test("It should add 2 * 2 to equal 4 ", () => {
    expect(math(2,2)).toBe(4)
});
