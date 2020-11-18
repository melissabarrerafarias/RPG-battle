const Potion = require('../lib/Potion');

const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {

        super(name);  

        this.inventory = [new Potion('health'), new Potion()];
    }

        
        getStats() {
            return {
                potions: this.inventory.length,
                health: this.health,
                strength: this.strength,
                agility: this.agility,
            };
        };

        getInventory() {
            if (this.inventory.length) {
                return this.inventory;
            }
            return false;
        };

        addPotion(potion) {
            this.inventory.push(potion);
        };

        usePotion(index) {
            const potion = this.getInventory().splice(index, 1)[0];

            switch (potion.name) {
                case 'agility':
                    this.agility += potion.value;
                    break;
                case 'health':
                    this.health += potion.value;
                    break;
                case 'strength':
                    this.strength += potion.value;
                    break;
            };
        }
};

module.exports = Player;

// when using "prototype", you are only creating the method once on the constructor itself. New player objects simply inherit the method from the constructor rather than having their own 
// instances of that method. Such inheritance can traverse multiple levels, meaning if the method being called doesnt exist on Player(), Javascript will look for it on the next constructor 
// up the chain. In this case, the next constructor would be the built-in Object data type. 


// The .splice() method removes items from an array and returns the removed item(s) as a new array. This, two things are happening here: the original inventory array has a single Potion removed
// at the specified index value and put into a new "removed items" array, then the Potion at index [0] of this "removed items" array is saved in a potion variable. 