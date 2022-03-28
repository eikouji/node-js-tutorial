const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('object created');
    }
}
// this info is available to use //
module.exports.sum = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};