let console = {};
console.log = function(log){

    document.getElementById('output').insertAdjacentHTML('beforeend', JSON.stringify(log)+'<br>');

};

function clearLogs(){
    document.getElementById('output').innerHTML = '';
}

let factory = new PersonFactory();
let decorator = new DecoratedCalculator(new CleverCalculator());
let cumulativeSum = new CumulativeSum();
let command = new Command(new SpecialMath(3));

let userSubscription = new UserSubscription();
userSubscription.subscribe(subscriber);

function createInstance(type){
  console.log (factory.createPerson(type));
}

function calculate(term1,term2,operation){
    console.log(decorator.operations(term1,term2,operation));
}

function add(){
  console.log(cumulativeSum.add(4).add(5).add(6).add(7).sum);
}

function execute(operation){
  console.log(command.execute(operation));
  console.log(command.commandsExecuted);

}

function subscriber(data){
  console.log(data);
}
function addUser(){
  userSubscription.addUser(document.getElementById('name').value);

}

function removeUser(){
  userSubscription.removeUser(document.getElementById('name').value);
}

function subscribe(){
  userSubscription.subscribe(subscriber);
}

function unsubscribe(){
  userSubscription.unSubscribe(subscriber);
}