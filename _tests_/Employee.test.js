const Employee = require("../lib/employee");

// parent describe block describes the file name or the main function that this should test
describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing name, id, and email properties when the 'new' keyword is called", () => {
            const obj = new Employee;
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
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