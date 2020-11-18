class Character {
    constructor(name = '') {
        this.name = name;

        this.health = Math.floor(Math.random() * 10 + 95);
        this.strength = Math.floor(Math.random() * 5 + 7);
        this.agility = Math.floor(Math.random() * 5 + 7);
    }
    isAlive() {
        if (this.health === 0) {
            return false;
        }
        return true;
    };
    
    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    }
    
    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
    
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    reduceHealth(health) {
        this.health -= health;
    
        if (this.health < 0) {
            this.health = 0;
        }
    };

}

module.exports = Character;

// note that the isAlive(), getHealth(), getAttackValue(), and reduceHealth() are the only methods that the Player and Enemy objects have in common, so those are the only methods we included
// on the Character() constructor. 

// Here, we are able to have Player() and Enemy() constructors inherit from Character using Object.create(Character.prototype). This concept of inheritance is one of the main principles of the 
// object-oriented programming and isn't unique to Javascript. These are the other three principles of OOP: ENCAPSULATION - Objects can privatize some of their data and only expose them 
// through public methods like getName(). ABSTRACTION:  Object methods are easy to use without needing to understand their complex inner workings. For example, playGame() does
// what you'd expect it to without knowing about the 100 other methods it might call internally. POLYMORPHISM: Objects (and thier methods) can change depending on the context. For example, 
// the Car and Plane objects might inherit from Vehicle, but their move() methods are very different. 



// In ES6, constructor functions can be written using the class keyword, as shown in the following code: 
// class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
  
//     honk() {
//       console.log('beep beep');
//     }
//   }
  
//   // car objects are still created and used the same way
//   const car = new Car('Honda', 'Civic');
//   car.honk();

// Note that the class syntax accomplishes the same things that a normal constructor function would, as seen in the following code: 
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }
  
//   Car.prototype.honk = function() {
//     console.log('beep bee');
//   };
  
//   const car = new Car('Honda', 'Civic');
//   car.honk();

// ES6 classes are often called syntactic sugar, because they are still constructor functions under the hood and use the same prototypal inheritance. They are simply easier to write. 

// Notice we replace the function keyword with class and move whatever parameter we had before into the nested constructor() method. The constructor() is necessary here, because we want to
// be able to supply an argument to the class. If the class wasn't intended to recieve arguments, the constructor() could be ommited. 


// Using extends, we were able to tell one class to inherit all of the methods from another class. Combined with super(), we could then add extra properties to the child object. The super
// keyword his how we can reference the parent object. In a constructor(), calling super() will call the constructor() of the parent. Even though we didn't add our own constructor() method
// to the Character class, one still exists under the hood to set up the object. 