const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("New Manager", () => {
        it("Is an extension of the Employee class", () => {
            const obj = new Manager();
        
            expect(obj).toBeInstanceOf(Employee);
        });

        it("Returns an object containing office number property when the 'new' keyword is called", () => {
            const obj = new Manager;
            expect("officeNumber" in obj).toEqual(true);
        });

        it("Accepts four arguments: name, id, email, and officeNumber, which are stored in the Manager object", () => {
            const thisName = "Brenna";
            const thisID = 12345;
            const thisEmail = "brenna.mcleod94@gmail.com";
            const thisofficeNumber = 7894;
        
            const obj = new Manager(thisName, thisID, thisEmail, thisofficeNumber);
        
            expect(obj.name).toEqual(thisName);
            expect(obj.id).toEqual(thisID);
            expect(obj.email).toEqual(thisEmail);
            expect(obj.officeNumber).toEqual(thisofficeNumber);
        });
    });

    describe("getName function", () => {
        it("Returns the name passed to the Manager object", () => {
            const obj = new Manager("Brenna");
    
            expect(obj.getName()).toEqual("Brenna");
            });
        });
    
    describe("getID function", () => {
    it("Returns the id passed to the Manager object", () => {
        const obj = new Manager("Brenna", 12345);

        expect(obj.getID()).toEqual(12345);
        });
    });

    describe("getEmail function", () => {
    it("Returns the email address passed to the Manager object", () => {
        const obj = new Manager("Brenna", 12345, "brenna.mcleod94@gmail.com");

        expect(obj.getEmail()).toEqual("brenna.mcleod94@gmail.com");
        });
    });

    describe("getOfficeNumber function", () => {
    it("Returns the office number passed to the Manager object", () => {
        const obj = new Manager("Brenna", 12345, "brenna.mcleod94@gmail.com", 345);

        expect(obj.getofficeNumber()).toEqual(345);
        });
    });

    describe("getRole function", () => {
        it("Returns 'Manager' after Manager object has been created", () => {
            const obj = new Manager();
    
            expect(obj.getRole()).toEqual("Manager");
        });
    });
});