const Engineer = require("../lib/engineer");

// parent describe block describes the file name or the main function that this should test
describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing github property when the 'new' keyword is called", () => {
            const obj = new Engineer;
            expect("gitHub" in obj).toEqual(true);
        });
    });

    // describe("something2", () => {
    //     it("should do something 2", () => {
    //         const obj = new Employee;
    //         expect(obj instanceof Employee).toEqual(true);
    //     });
    // });

    // describe("something3", () => {
    //     it("should do something 3", () => {
    //         const obj = new Employee;
    //         expect(obj instanceof Employee).toEqual(true);
    //     });
    // });
});