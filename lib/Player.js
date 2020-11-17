const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];

    // returns an object with various player properties 
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health, 
            strength: this.strength,
            agility: this.agility,
        };
    };

    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    };

    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    }

    Player.prototype.isAlive = function() {
        if (this.health === 0) {
            return false;
        }
        return true;
    }

    Player.prototype.reduceHealth = function(health) {
        this.health -= health;

        if (this.health < 0) {
            this.health = 0;
        }
    };

    Player.prototype.getAttackValue = function() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };

    Player.prototype.addPotion = function(potion) {
        this.inventory.push(potion);
    };

    Player.prototype.usePotion = function(index) {
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