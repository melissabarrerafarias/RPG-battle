const Player = require('../lib/Player');

const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});


// A good test runs in isolation. Mocks allow us to fake assumed data, which allows the test at hand to focus only on the logic it cares about. 

// const Potion = require('../lib/Potion');
// jest.mock('../lib/Potion');
// the require() line imports the Potion() constructor into the test, establishing Potion as a usable variable (otherwise new Potion() would throw and error). Then jest.mock() mocks/replaces
// the constructor's implementation with our faked data. 