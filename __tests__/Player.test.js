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

    test('gets players stats as an object', () => {
        const player = new Player('Dave');

        expect(player.getStats()).toHaveProperty('potions');
        expect(player.getStats()).toHaveProperty('health');
        expect(player.getStats()).toHaveProperty('strength');
        expect(player.getStats()).toHaveProperty('agility');
    });


    test('gets inventory from player or returns false', () => {
        const player = new Player('Dave');

        expect(player.getInventory()).toEqual(expect.any(Array));

        player.inventory = [];

        expect(player.getInventory()).toEqual(false);
    });


// A good test runs in isolation. Mocks allow us to fake assumed data, which allows the test at hand to focus only on the logic it cares about. 

// const Potion = require('../lib/Potion');
// jest.mock('../lib/Potion');
// the require() line imports the Potion() constructor into the test, establishing Potion as a usable variable (otherwise new Potion() would throw and error). Then jest.mock() mocks/replaces
// the constructor's implementation with our faked data. 


// test('gets players stats as an object', () => {
//     const player = new Player('Dave');

//     expect(player.getStats()).toHaveProperty('potions');
//     expect(player.getStats()).toHaveProperty('health');
//     expect(player.getStats()).toHaveProperty('strength');
//     expect(player.getStats()).toHaveProperty('agility');
// });
// here we are checking that player.getStats() returns an object with four specific properties. 
