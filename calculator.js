class myCalc{
    // my constructor
    constructor(){
        this.sum = 0;
        this.product = 1;
    }

    // my functions
    // my add function
    add(){
        for (var i = 0; i < arguments.length; i++) {
            this.sum += arguments[i];
        }
        return this.sum;
    }

    // my multiply function
    multiply(){
        for (var i = 0; i < arguments.length; i++) {
            this.product *= arguments[i];
        }
        return this.product;
    }

    last(){
        return this.add()
    }

    set_slot(){

    }

    get_slot(){
        return 3
    }
}

module.exports = {
    myCalc
}