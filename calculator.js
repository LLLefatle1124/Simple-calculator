
 class myPart2{
    // my Constructor
    constructor(){
        
    }

    // My add function
    add(){
        this.sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            this.sum += arguments[i];
        }

        return this.sum;
    }

    // My multiply function
    multiply(){
        this.product = 1;

        for (var i = 0; i < arguments.length; i++) {
            this.product *= arguments[i];
        }

        return this.product;
    }
}

module.exports = {
    myPart2
}
