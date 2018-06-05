describe("The add function", function() {
    it("Adds 1 + 2 + 3 together correctly", function() {
        var output = add(1,2,3);
        expect(output).toEqual(6);
    });
    /*
    it("Adds negative together correctly", function() {
        var output = add(-1,-2,-3);
        expect(output).toEqual(-6);
    });

    it("Return 0 if no input are provided", function() {
        var output = add();
        expect(output).toEqual(0);
    });
    it("Adds only numeric inputs together", function() {
        var output = add(1,"1",2,"2",3,"3");
        console.log(output);
        expect(output).toEqual(6);
    });
    */
});