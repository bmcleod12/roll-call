const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

// parent describe block describes the file name or the main function that this should test
describe("Manager", () => {
    describe("New Manager", () => {
        it("should return an object containing office number property when the 'new' keyword is called", () => {
            const obj = new Manager;
            expect("officeNumber" in obj).toEqual(true);
        });
    });
});