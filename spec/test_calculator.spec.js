// let part2 = require("../calculator")
const Part2 = require('../calculator') ;
let hiPart2 = new Part2.myPart2()


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

})

describe("function returning a product of numbers.", function(){

    it("returns product of two umbers.", function(){
        expect(hiPart2.multiply(1, 2)).toBe(2)
    })

    it("returns product of n umbers.", function () {
        expect(hiPart2.multiply(1, 2, 3, 4)).toBe(24)
    })
})

