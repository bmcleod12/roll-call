const Employee = require("../lib/employee");
const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("New Intern", () => {
        it("Is an extension of the Employee class", () => {
            const obj = new Intern();
        
            expect(obj).toBeInstanceOf(Employee);
        });

        it("Returns an object containing school property when the 'new' keyword is called", () => {
            const obj = new Intern;
            expect("school" in obj).toEqual(true);
        });

        it("Accepts four arguments: name, id, email, and school, which are stored in the Intern object", () => {
            const thisName = "Brenna";
            const thisID = 12345;
            const thisEmail = "brenna.mcleod94@gmail.com";
            const thisSchool = "NWMSU";
        
            const obj = new Intern(thisName, thisID, thisEmail, thisSchool);
        
            expect(obj.name).toEqual(thisName);
            expect(obj.id).toEqual(thisID);
            expect(obj.email).toEqual(thisEmail);
            expect(obj.school).toEqual(thisSchool);
        });
    });

    describe("getName function", () => {
        it("Returns the name passed to the Intern object", () => {
            const obj = new Intern("Brenna");
    
            expect(obj.getName()).toEqual("Brenna");
            });
        });
    
    describe("getID function", () => {
    it("Returns the id passed to the Intern object", () => {
        const obj = new Intern("Brenna", 12345);

        expect(obj.getID()).toEqual(12345);
        });
    });

    describe("getEmail function", () => {
    it("Returns the email address passed to the Intern object", () => {
        const obj = new Intern("Brenna", 12345, "brenna.mcleod94@gmail.com");

        expect(obj.getEmail()).toEqual("brenna.mcleod94@gmail.com");
        });
    });

    describe("getSchool function", () => {
        it("Returns Intern's school passed to the Intern object", () => {
            const obj = new Intern("Brenna", 12345, "brenna.mcleod94@gmail.com", "NWMSU");
    
            expect(obj.getSchool()).toEqual("NWMSU");
            });
        });

    describe("getRole function", () => {
    it("Returns 'Intern' after Intern object has been created", () => {
        const obj = new Intern();

        expect(obj.getRole()).toEqual("Intern");
        });
    });
});