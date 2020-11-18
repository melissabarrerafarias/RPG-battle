const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion = new Potion(); 

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

// the "new" keyword creates a new Potion object. Here we are assuming that when we create a new Potion, it will take the string we pass in and assign it to the potion's name. The expect.any()
// method takes a constructor as an argument. Here, we're expecting that the value property is created with a Number() constructor. In this instance, we allow the value to be any number, 
// rather than a number in a range so that the test has more flexibility. 



// constructor functions act like blueprints for objects. Because they don't have a return statement, they return undefined by default. However, unlike a regular function, they are meant 
// to be used in conjunction with the "new" keyword. For example, pretend you want to have a factory that builds cars. If we wanted to create a constructor function for the car, we would 
// write something like this: 
// function Car(make, model) {
//     this.make = make;
//     this.model = model;
//   }

// inside the function, we assign this.make and this.model to the make and model parameters. In this case, "this" refers to the car object that will be created with the constructor function. 
// Here we are saying: "This function Car() will be used to create a new instances of Car objects. When the make and model are passed into Car(), we will set those properties up on the 
// new Car object." If we eliminated the this.make and this.model lines of code, then creating a new Car() later would essentially just create an empty object. IMPORTANT: Do not use 
// arrow functions as constructor functions. Arrow functions change the meaning of the keyword "this", which is core piece of constructor functions. Now, in order to actually create the new 
// car object, we need to invoke the Car() constructor by calling it with the "new" keyword. Then, just like you would with a regular function, pass in the values for make and model as
// arguments like / new Car("Honda", "Civic");