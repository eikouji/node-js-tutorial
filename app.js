const tutorial = require('./tutorial.js');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject()); 



 const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial',1,2);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;

    }
    get name() {
        return this._name;
    }
}

let cathy = new Person('cathy');
let keith = new Person('keith');

keith.on('name',()=>{
    console.log('my name is ' + keith.name);

});

cathy.on('name',()=>{
    console.log('my name is ' + cathy.name);
});

cathy.emit('name');
keith.emit('name');

