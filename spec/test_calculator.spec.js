let calculator = require("../calculator")
let part2 = new calculator.myCalc();


describe("add_numbers.", function(){
    // beforeEach(function() {
        
    // });

    afterEach(function() {
        part2.sum = 0;
        part2.product = 1;
    });

    it("should add two nubers and return the sum.", function(){
    expect(part2.add(0,0)).toBe(0)
    })

    it("should add two negative numbers and return the sum.", function(){
        expect(part2.add(-1, -1)).toBe(-2)
    })

    it("should add two negative numbers and return the sum.", function() {
        expect(part2.add(4, 5)).toBe(9)
    })

    it("adds any count of numbers and returns the sum.", function(){
        expect(part2.add(1, 2, 3, 4)).toBe(10)
    })

})

describe("function returning a product of numbers.", function(){
    it("returns product of two umbers.", function(){
        expect(part2.multiply(1, 2)).toBe(2)
    })

    it("returns product of n umbers.", function () {
        expect(part2.multiply(1, 2, 3, 4)).toBe(24)
    })
})