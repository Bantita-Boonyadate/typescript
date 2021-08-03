"use strict";
function createEmployee(config) {
    var newEmployee = { firstname: 'Default firstname', lastname: 'Default lastname', employID: 111111, ages: 1, salary: 20000, bonus: true };
    if (config.firstname) {
        newEmployee.firstname = config.firstname;
    }
    if (config.lastname) {
        newEmployee.lastname = config.lastname;
    }
    if (config.employID) {
        newEmployee.employID = config.employID;
    }
    if (config.ages) {
        newEmployee.ages = config.ages;
    }
    if (config.salary) {
        if (config.bonus == true) {
            newEmployee.salary = config.salary * 2.5;
        }
        else {
            newEmployee.salary = config.salary;
            newEmployee.bonus = false;
        }
    }
    return newEmployee;
}
var myEmployee = createEmployee({ firstname: 'Bantita', lastname: 'Boonyadate', employID: 632110343, ages: 20, salary: 30000, bonus: true });
console.log("myEmployee -->", myEmployee);
