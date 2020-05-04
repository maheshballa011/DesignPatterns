class Person {

    constructor(name = 'unnamed person') {
        this.name = name;
    }
}

class Shopper extends Person {

    constructor(name, money = 0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
}

/**
 * Singleton design pattern to create single instance
 */
class Employee extends Shopper {

    constructor(name, money = 0, employer = '') {
        if (!Employee.instance) {
            super(name, money);
            this.employerName = employer;
            this.employed = true;
            Employee.instance = this;
        } else {
            console.log("Employee Instance already created");
        }

        return Employee.instance;
    }
}

/**
 * Factory pattern to create different type of instances
 */
class PersonFactory {

    constructor(type) {

        this.createPerson = function (type) {

            switch (type) {
                case 'person':
                    return new Person('Mahesh');
                case 'employee':
                    return new Employee('Eve Parcello', 1000, 'Refinitiv');
                case 'shopper':
                    return new Shopper('Alex Banks', 1000);
                default:
                    throw ('Object type is unknown');
            }

        }

    }

}
