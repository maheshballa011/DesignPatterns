
/**
 * chain of responsibility pattern to execute operations in chain
 */
class CumulativeSum {
    constructor() {
        this.sum = 0;
    }
    add = function (val) {
        this.sum += val;
        return this;
    }

}


class SpecialMath {
    constructor(num) {
        this._num = num;
    }

    square() {
        return this._num ** 2;
    }

    cube() {
        return this._num ** 3;
    }

    squareRoot() {
        return Math.sqrt(this._num);
    }
}

/**
 * Observer pattern for subscriptions
 */
class UserSubscription {
    constructor() {
        this.subscribers = [];
        this.users = [];
    }
    subscribe(fn) {
        this.subscribers.push(fn);
    }
    unSubscribe(fn) {
        this.subscribers = this.subscribers.filter(item => fn !== item);
    }
    addUser(user) {
        this.users.push(user);
        this.notify({ user, state: 'added' });
    }
    removeUser(user) {
        const index = this.users.indexOf(user);
        if (index != -1) {
            this.users.pop(user);
            this.notify({ user, state: 'removed' })
        }

    }

    notify(data) {
        this.subscribers.forEach(fn => { fn(data) })
    }
}

/**
 * Command pattern
 */
class Command {
    constructor(specialMath) {
        this.commandsExecuted = [];
        this.specialMath = specialMath;
    }

    execute = function (command) {
        this.commandsExecuted.push(command);
        return this.specialMath[command]();
    }

}
