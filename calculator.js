module.exports = {
    myCalculator
}

 class myCalculator{
    // my Constructor
    constructor(){
        
    }

    // My add function
    function add(){
        sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }

        return sum;
    }

    // My multiply function
    function multiply(){
        product = 1;

        for (var i = 0; i < arguments.length; i++) {
            product *= arguments[i];
        }

        return product;
    }
}
