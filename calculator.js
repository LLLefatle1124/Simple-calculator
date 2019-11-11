

class myCalc{
    // my constructor
    constructor(){
        this.sum = 0;
        this.product = 0;
    };

    // my functions
    // my add function
    add(){
        for (var i = 0; i < arguments.length; i++) {
            this.sum += arguments[i];
        }
        return this.sum;
    };
    // my multiply function
    multiply(){
        for (var i = 0; i < arguments.length; i++) {
            this.product *= arguments[i];
        }
        return this.product;
    };
}

module.exports = {
    myCalc
}