function Rabbit() {
    console.log(this)
}
Rabbit.prototype = {
  eats: 'yes'
};

const rabbit = new Rabbit();
const rabbit11 = Rabbit();
const rabbit22 = new Rabbit();

console.log(rabbit.eats)

Rabbit.prototype = {}
console.log(rabbit.eats)

const rabbit0 = new Rabbit()
console.log(rabbit0.eats)


function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

Rabbit2.prototype.eats = false;
let rabbit2 = new Rabbit2();


console.log(rabbit2.eats)
