class Person {

    constructor(name='unnamed person')  {
        this.name = name;
    }
}

class Shopper extends Person {

    constructor(name, money=0) {
        super(name);
        this.money = money;
        this.employed = false;
    }
}

class Employee extends Shopper {

    constructor(name, money=0, employer='') {
        if(Employee.instance){
            console.log("Instance already created");
            return this;
        }
        super(name, money);
        this.employerName = employer;
        this.employed = true;
        Employee.instance = this;
        return this;
    }
}

class PersonFactory {

    constructor(type){

        this.createPerson = function(type) {

            switch (type) {
                case 'person':
                    return new Person('Mahesh');
                case 'employee':
                    return new Employee('Eve Parcello', 1000, 'Refinitiv');
                case 'shopper':
                    return new Shopper('Alex Banks', 1000);
                default:
                    throw('Object type is unknown');
            }

        }

    }

}
