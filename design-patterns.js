let console = {};
console.log = function(log){

    document.getElementById('output').insertAdjacentHTML('beforeend', JSON.stringify(log)+'<br>');

};

function clearLogs(){
    document.getElementById('output').innerHTML = '';
}

let factory = new PersonFactory();
let decorator = new calculatorWapper(new CleverCalculator());
let cumulativeSum = new CumulativeSum();
let command = new Command(new SpecialMath(3));

let userSubscription = new UserSubscription();
userSubscription.subscribe(subscriber);

function createInstance(type, name, amount, company){
  console.log (factory.createPerson(type, name, amount, company));
}

function calculate(term1,term2,operation){
    console.log(decorator.operations(term1,term2,operation));
}

function add(){
  console.log(cumulativeSum.add(10).add(11).add(12).add(13).sum);
}

function execute(operation){
  console.log(command.execute(operation));
  console.log(command.commandsExecuted);

}

function subscriber(data){
  console.log(data);
}
function addUser(){
  userSubscription.addUser(document.getElementById('userName').value);

}

function removeUser(){
  userSubscription.removeUser(document.getElementById('userName').value);
}

function subscribe(){
  userSubscription.subscribe(subscriber);
}

function unsubscribe(){
  userSubscription.unSubscribe(subscriber);
}