const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

// parent describe block describes the file name or the main function that this should test
describe("Engineer", () => {
    describe("New Engineer", () => {
        it("Is an extension of the Employee class", () => {
            const obj = new Engineer();
        
            expect(obj).toBeInstanceOf(Employee);
        });

        it("Returns an object containing gitHub property when the 'new' keyword is called", () => {
            const obj = new Engineer;
            expect("gitHub" in obj).toEqual(true);
        });

        it("Accepts four arguments: name, id, email, and gitHub, which are stored in the Engineer object", () => {
            const thisName = "Brenna";
            const thisID = 12345;
            const thisEmail = "brenna.mcleod94@gmail.com";
            const thisgitHub = "bmcleod12";
        
            const obj = new Employee(thisName, thisID, thisEmail, thisgitHub);
        
            expect(obj.name).toEqual(thisName);
            expect(obj.id).toEqual(thisID);
            expect(obj.email).toEqual(thisEmail);
            expect(obj.gitHub).toEqual(thisgitHub);
        });
    });
});