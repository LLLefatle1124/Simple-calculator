// Imports
const Part2 = require('../calculator') ;

// object creation
let hiPart2 = new Part2.calculator()

describe("add_numbers ", function(){

    it("should add two nubers and return the sum.", function(){
    
        expect(hiPart2.add(0,0)).toBe(0)
    
    })
    
    it("should add two negative numbers and return the sum.", function(){
    
        expect(hiPart2.add(-1, -1)).toBe(-2)
    
    })
    
    it("should add two negative numbers and return the sum.", function() {
    
        expect(hiPart2.add(4, 5)).toBe(9)
    
    })

    it("adds any count of numbers and returns the sum.", function(){
    
        expect(hiPart2.add(1, 2, 3, 4)).toBe(10)
    
    })

    it("allows last() as a parameter and do addition using it", function(){
        
        hiPart2.add(1,2)
        
        expect(hiPart2.add(hiPart2.last(), 5)).toBe(8)
    
    })
})

describe("function multiply.", function(){

    // test for returning a product of just two numbers
    it("returns product of two umbers.", function(){

        expect(hiPart2.multiply(1, 2)).toBe(2)
    
    })

    // test for returning a product of any numbers
    it("returns product of n umbers.", function () {
    
        expect(hiPart2.multiply(1, 2, 3, 4)).toBe(24)
    
    })

    // test for usage of the last result in other calculations
    it("allows last() as a parameter and do some multiplication using it", function(){
        
        hiPart2.multiply(1, 2, 3, 4)

        expect(hiPart2.multiply(hiPart2.last(), 5)).toBe(120)
    
    })

    it("allows a slot array instance as a variable and add to another number" , function(){
    
        expect(hiPart2.add(hiPart2.slots[1], 5)).toBe(8)    
    
    })

})

describe("function last.", function(){
    
    it("returns the preveous result for add",function(){

        hiPart2.add(1, 2)
        
        expect(hiPart2.last()).toBe(3)
    
    })
    
    it("returns the preveous result for multiply",function(){
        
        hiPart2.multiply(100,20)
        
        expect(hiPart2.last()).toBe(2000)
    
    })

})


describe("function set_slot.", function(){

    it("takes one argument called slot member and ", function(){
        
        hiPart2.add(1,2)
        hiPart2.set_slot(1)

        expect(hiPart2.slots[1]).toBe(3)

        hiPart2.add(10, 20)
        hiPart2.set_slot[2]

        expect(hiPart2.slots[2]).toBe(30)

    })

})


// get slot accepts one variable and returns the result of lust/previous-calculation
describe("function get_slot.", function(){

    hiPart2.add(1,2)
    hiPart2.set_slot(1)

    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
   
        expect(hiPart2.get_slot(1)).toBe(3)
   
    })

    hiPart2.add(10,20)
    hiPart2.set_slot(2)
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
   
        expect(hiPart2.get_slot(2)).toBe(30)
   
    })

    it("does not affect last", function(){
   
        hiPart2.add(100, 200)
   
        expect(hiPart2.get_slot(1)).toBe(3)   
        expect(hiPart2.get_slot(2)).toBe(30)

        expect(hiPart2.last()).toBe(300)
   
    })
    
})
