const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

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
        
            const obj = new Engineer(thisName, thisID, thisEmail, thisgitHub);
        
            expect(obj.name).toEqual(thisName);
            expect(obj.id).toEqual(thisID);
            expect(obj.email).toEqual(thisEmail);
            expect(obj.gitHub).toEqual(thisgitHub);
        });
    });

    describe("getName function", () => {
        it("Returns the name passed to the Engineer object", () => {
            const obj = new Engineer("Brenna");
    
            expect(obj.getName()).toEqual("Brenna");
            });
        });
    
    describe("getID function", () => {
    it("Returns the id passed to the Engineer object", () => {
        const obj = new Engineer("Brenna", 12345);

        expect(obj.getID()).toEqual(12345);
        });
    });

    describe("getEmail function", () => {
    it("Returns the email address passed to the Engineer object", () => {
        const obj = new Engineer("Brenna", 12345, "brenna.mcleod94@gmail.com");

        expect(obj.getEmail()).toEqual("brenna.mcleod94@gmail.com");
        });
    });

    describe("getRole function", () => {
    it("Returns 'Engineer' after Engineer object has been created", () => {
        const emp = new Engineer();

        expect(emp.getRole()).toEqual("Engineer");
        });
    });
});