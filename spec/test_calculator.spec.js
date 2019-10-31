let calculator = require("../calculator")

describe("add_numbers.", function(){

    it("should add two nubers and return the sum.", function(){
    expect(calculator.add(0,0)).toBe(0)
    })
    
    it("should add two negative numbers and return the sum.", function(){
        expect(calculator.add(-1, -1)).toBe(-2)
    })
    
    it("should add two negative numbers and return the sum.", function() {
        expect(calculator.add(4, 5)).toBe(9)
    })

    it("adds any count of numbers and returns the sum.", function(){
        expect(calculator.add(1, 2, 3, 4)).toBe(10)
    })

})

describe("function returning a product of numbers.", function(){

    it("returns product of two umbers.", function(){
        expect(calculator.multiply(1, 2)).toBe(2)
    })

    it("returns product of n umbers.", function () {
        expect(calculator.multiply(1, 2, 3, 4)).toBe(24)
    })
})

