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

        this.createPerson = function (type, name, amount, company) {

            switch (type) {
                case 'person':
                    return new Person(name);
                case 'employee':
                    return new Employee(name, amount, company);
                case 'shopper':
                    return new Shopper(name, amount);
                default:
                    throw ('Object type is unknown');
            }

        }

    }

}
