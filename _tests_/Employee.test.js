const Employee = require("../lib/employee");

// parent describe block describes the file name or the main function that this should test
describe("Employee", () => {
    describe("New Employee", () => {
        it("Returns an object containing name, id, and email properties when the 'new' keyword is called", () => {
            const obj = new Employee;
            expect("name" in obj).toEqual(true);
            expect("id" in obj).toEqual(true);
            expect("email" in obj).toEqual(true);
        });

        it("Accepts three arguments: name, id, and email, which are stored in the Employee object", () => {
            const thisName = "Brenna";
            const thisID = 12345;
            const thisEmail = "brenna.mcleod94@gmail.com";
        
            const obj = new Employee(thisName, thisID, thisEmail);
        
            expect(obj.name).toEqual(thisName);
            expect(obj.id).toEqual(thisID);
            expect(obj.email).toEqual(thisEmail);
        });
    });

    describe("getName function", () => {
    it("Returns the name passed to the Employee object", () => {
        const obj = new Employee("Brenna");

        expect(obj.getName()).toEqual("Brenna");
        });
    });

    describe("getID function", () => {
    it("Returns the id passed to the Employee object", () => {
        const obj = new Employee("Brenna", 12345);

        expect(obj.getID()).toEqual(12345);
        });
    });

    describe("getEmail function", () => {
    it("Returns the email address passed to the Employee object", () => {
        const obj = new Employee("Brenna", 12345, "brenna.mcleod94@gmail.com");

        expect(obj.getEmail()).toEqual("brenna.mcleod94@gmail.com");
        });
    });

    describe("getRole function", () => {
    it("Returns 'Employee' after Employee object has been created", () => {
        const emp = new Employee();

        expect(emp.getRole()).toEqual("Employee");
        });
    });
});