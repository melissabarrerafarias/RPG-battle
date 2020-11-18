class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === "health") {
            this.value = Math.floor(Math.random() * 10 + 30);
        }
        else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion


// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     if (this.name === "health") {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     } 
//     else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }

// notice that the this.name functions is set to name || this.types[Math.floor(Math.random() * this.types.length)]. This is another use of the || operator. This expression will be evaulated
// so that if name is truthy - that is to say, it can be coerced to true- then this.name = name. IF name is not truthy, then this.name = this.types[Math.floor(Math.random() * this.types.length)]
// or a random type of potion. 