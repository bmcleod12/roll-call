const Intern = require("../lib/intern");

// parent describe block describes the file name or the main function that this should test
describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing school property when the 'new' keyword is called", () => {
            const obj = new Intern;
            expect("school" in obj).toEqual(true);
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