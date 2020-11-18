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

    test('gets players health value', () => {
        const player = new Player('Dave');
        expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
    });

    test('checks if player is alive or not', () => {
        const player = new Player('Dave');

        expect(player.isAlive()).toBeTruthy();

        player.health = 0;

        expect(player.isAlive()).toBeFalsy();
    });

    test('subracts from players health', () => {
        const player = new Player('Dave');
        const oldHealth = player.health;

        player.reduceHealth(5);
        
        expect(player.health).toBe(oldHealth - 5);

        player.reduceHealth(99999);

        expect(player.health).toBe(0);
    });

    test('gets players attack value', () => {
        const player = new Player('Dave');
        player.strength = 10;

        expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
        expect(player.getAttackValue()).toBeLessThanOrEqual(15);
    });

    test('adds a potion to the inventory', () => {
        const player = new Player('Dave');
        const oldCount = player.inventory.length;

        player.addPotion(new Potion());

        expect(player.inventory.length).toBeGreaterThan(oldCount);
    });

    test('used a potion from inventory', () => {
        const player = new Player('Dave');
        player.inventory = [new Potion(), new Potion(), new Potion()];
        const oldCount = player.inventory.length;

        player.usePotion(1);

        expect(player.inventory.length).toBeLessThan(oldCount);
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



// the expect.stringContaining() method is an expect method that we can use to make sure our string includes our player's health. This is preffered in thiscase because we might need 
// flexibility to chnage how the player's health will be displayed. 


// Notice how we create a new Player instance in every test. We could choose to use the same one in all of our tests, but this might lead to unintneded consequences. Now that out tests affect
// the Player objects property values, if we used the same object every time, we would no londer be testing properties and methods in isolation. So, it's important to create a new instance
// of the object we're testing in every test to give that test a fresh start. 