class Expense {
  constructor(name, type, amount, threshold) {
    this.name = name
    this.type = type
    this.amount =  amount
    this.threshold = threshold
  }
  
  isMeal() {
    return this.type === 'meal'
  }

  isOverExpense() {
    return this.amount > this.threshold
  }
  
  isOverMealExpense() {
    return this.isMeal() && this.isOverExpense()
  }
}

export default Expense