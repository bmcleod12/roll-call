const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("New Intern", () => {
        it("should return an object containing school property when the 'new' keyword is called", () => {
            const obj = new Intern;
            expect("school" in obj).toEqual(true);
        });
    });
});