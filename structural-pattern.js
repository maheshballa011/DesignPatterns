class OldCalculator {
    constructor() {
    }
    operations(term1, term2, operation) {
        switch (operation) {
            case 'add':
                return { res: term1 + term2 };
            case 'sub':
                return { res: term1 - term2 };
            default:
                return NaN;
        }
    }
}

class NewCalculator {
    constructor() {
    }
    multiply(term1, term2) {
        return term1 * term2;
    }
    divide(term1, term2) {
        return term1 / term2;
    }
}

/**
 * Adapter pattern
 */
class UltimateCalculator{
    constructor(){
        this.oldCalculator = new OldCalculator();
        this.newCalculator = new NewCalculator();
    }

    operations(term1, term2, operation) {
        switch (operation) {
            case 'multiply':
                return {res:this.newCalculator.multiply(term1,term2)};
            case 'divide':
                return {res:this.newCalculator.divide(term1,term2)};
            default:
                return this.oldCalculator.operations(term1,term2,operation);
        }
    }
}

class CleverCalculator {
    constructor() {
      this.ultimateCalculator = new UltimateCalculator();
      this.cache = {};
    }
    operations(term1, term2, operation) {
      const key = `${term1}${term2}${operation}`;
      if (this.cache[key]) {
        return this.cache[key];
      } else {
        const res = this.ultimateCalculator.operations(term1, term2, operation);
        this.cache[key] = res;
        return res;
      }
    };
  }

  /**
   * Decorator Pattern
   */
  class calculatorWapper{
    constructor(calculator){
        this.calculator = calculator;
      
    }
    operations(term1,term2,operation){
        console.log(term1,term2,operation);
       return this.calculator.operations(term1,term2,operation);
    }
}
  
