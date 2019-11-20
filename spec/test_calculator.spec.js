// Imports
const Part2 = require('../calculator') ;

// object creation
let part2_object = new Part2.calculator()


// my specs
describe("add_numbers ", function(){

    it("should add two nubers and return the sum.", function(){
    
        expect(part2_object.add(0,0)).toBe(0)
    
    })
    
    it("should add two negative numbers and return the sum.", function(){
    
        expect(part2_object.add(-1, -1)).toBe(-2)
    
    })
    
    it("should add two negative numbers and return the sum.", function() {
    
        expect(part2_object.add(4, 5)).toBe(9)
    
    })

    it("adds any count of numbers and returns the sum.", function(){
    
        expect(part2_object.add(1, 2, 3, 4)).toBe(10)
    
    })

    it("allows last() as a parameter and do addition using it", function(){
        
        part2_object.add(1,2)
        
        expect(part2_object.add(part2_object.last(), 5)).toBe(8)
    
    })
})

describe("function multiply.", function(){

    // test for returning a product of just two numbers
    it("returns product of two umbers.", function(){

        expect(part2_object.multiply(1, 2)).toBe(2)
    
    })

    // test for returning a product of any numbers
    it("returns product of n umbers.", function () {
    
        expect(part2_object.multiply(1, 2, 3, 4)).toBe(24)
    
    })

    // test for usage of the last result in other calculations
    it("allows last() as a parameter and do some multiplication using it", function(){
        
        part2_object.multiply(1, 2, 3, 4)

        expect(part2_object.multiply(part2_object.last(), 5)).toBe(120)
    
    })

    it("allows a slot array instance as a variable and add to another number" , function(){
    
        expect(part2_object.add(part2_object.slots[1], 5)).toBe(8)    
    
    })

})

describe("function last.", function(){
    
    it("returns the preveous result for add",function(){

        part2_object.add(1, 2)
        
        expect(part2_object.last()).toBe(3)
    
    })
    
    it("returns the preveous result for multiply",function(){
        
        part2_object.multiply(100,20)
        
        expect(part2_object.last()).toBe(2000)
    
    })

})


describe("function set_slot.", function(){

    it("takes one argument called slot member and ", function(){
        
        part2_object.add(1,2)
        part2_object.set_slot(1)

        expect(part2_object.slots[1]).toBe(3)

        part2_object.add(10, 20)
        part2_object.set_slot[2]

        expect(part2_object.slots[2]).toBe(30)

    })

})


// get slot accepts one variable and returns the result of lust/previous-calculation
describe("function get_slot.", function(){

    part2_object.add(1,2)
    part2_object.set_slot(1)

    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
   
        expect(part2_object.get_slot(1)).toBe(3)
   
    })

    part2_object.add(10,20)
    part2_object.set_slot(2)
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
   
        expect(part2_object.get_slot(2)).toBe(30)
   
    })

    it("does not affect last", function(){
   
        part2_object.add(100, 200)
   
        expect(part2_object.get_slot(1)).toBe(3)   
        expect(part2_object.get_slot(2)).toBe(30)

        expect(part2_object.last()).toBe(300)
   
    })

})
