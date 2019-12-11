
 class calculator{
    
    // my Constructor
    constructor(){
    
        this.slots = []
        this.myLast = 0
    
    }

    // My add function
    add(){

        this.sum = 0;
        let k
        let slotNumber

        for (var i = 0; i < arguments.length; i++) {
            
            k = arguments[i]
            slotNumber = k.toString().charAt(k.length-1)

            // if last is passed as an argument
            if(arguments[i] == 'LAST'){
                this.sum += this.last() 
            }
            // if a slot is passed as an argument
            else if(arguments[i] == ('SLOT_' + slotNumber.toString())){
                // this.set_slot(slotNumber)
                this.sum += this.get_slot(slotNumber)
            }
            // if just a number is passed
            else{
                this.sum += arguments[i]
            }
            
        }

        this.myLast = this.sum
        return this.sum
    
    }

    // My multiply function
    multiply(){

        this.product = 1
        let k
        let slotNumber
        
        for (var i = 0; i < arguments.length; i++){

            k = arguments[i]
            slotNumber = k.toString().charAt(k.length-1)

            // if last is passed as an argument
            if(arguments[i] == 'LAST'){
                this.product *= this.last()
            }
            // if a slot is passed as an argument
            else if(arguments[i] == ('SLOT_' + slotNumber.toString())){
                // this.set_slot(slotNumber)
                this.product *= this.get_slot(slotNumber)
            }
            // if just a number is passed as an argument
            else{
                this.product *= arguments[i]
            } 
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

let myCal = new calculator()
myCal.add(1, 2)
myCal.multiply('LAST', 5)
module.exports = {
    calculator
}