
 class calculator{
    
    // my Constructor
    constructor(){
    
        this.slots = []
        this.myLast = 0
    
    }

    // My add function
    add(){

        this.sum = 0;

        for (var i = 0; i < arguments.length; i++) {
            this.sum += arguments[i]
        }
        
        this.myLast = this.sum
        return this.sum
    
    }

    // My multiply function
    multiply(){

        this.product = 1

        for (var i = 0; i < arguments.length; i++) {
            this.product *= arguments[i]
        }
    
        this.myLast = this.product
        return this.product
    
    }

    last(){
    
        return this.myLast
   
    }

    set_slot(mySlot){
   
        this.slots[mySlot] = this.last()
        return this.slots[mySlot]
   
    }

    get_slot(_mySlot){
    
        return this.slots[_mySlot]
    
    }
}

module.exports = {
    calculator
}