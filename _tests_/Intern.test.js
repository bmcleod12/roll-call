const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

// parent describe block describes the file name or the main function that this should test
describe("Intern", () => {
    describe("New Intern", () => {
        it("should return an object containing school property when the 'new' keyword is called", () => {
            const obj = new Intern;
            expect("school" in obj).toEqual(true);
        });
    });
});