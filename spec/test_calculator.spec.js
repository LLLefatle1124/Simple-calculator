// let part2 = require("../calculator")
const Part2 = require('../calculator') ;
let hiPart2 = new Part2.myPart2()

beforeEach(function() {
    part2.sum = 0;
});

describe("add_numbers.", function(){
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

    // it("allows last() as a parameter and do addition using it", function(){
    //     expect(part2.multiply(last(), 5)).toBe(15)
    // })
})

describe("function multiply.", function(){

    // 
    beforeEach(function(){
        hiPart2.product = 1;
    })

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
        expect(part2.multiply(part2.last(), 5)).toBe(15)
    })

})

describe("function last.", function(){

    it("returns the preveous result for add",function(){
        expect(part2.last()).toBe(3)
    })

    part2.add(100,200)

    it("returns the preveous result for add",function(){
        expect(part2.last()).toBe(300)
    })

})

// what should set slot do without just having to accept one variable
describe("function set_slot.", function(){
    it("takes one argument called slot member and ", function(){
        expect().toBe()
    })
})

// get slot accepts one variable and returns the result of lust/previous-calculation
describe("function get_slot.", function(){

    part2.add(1,2)
    part2.set_slot(1)

    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(part2.get_slot(1)).toBe(3)
    })

    part2.add(10,20)
    part2.set_slot(2)
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(part2.get_slot(2)).toBe(30)
    })

    part2.add(100,200)  //returns 300 & last vale should be updated
    
    it("accepts one variable and returns the resut of lust/prev-calculation", function(){
        expect(part2.get_slot(1)).toBe(3)   
        expect(part2.get_slot(2)).toBe(30)
    })
})
