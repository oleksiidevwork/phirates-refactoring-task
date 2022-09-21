import DataAPIClient from './api/Client';

export async function report() {
  /**
   * we will fetch the expenses data from backend
   */
  const expenses = await DataAPIClient.getExpenses();
  console.info(`Today Travel Expenses ${new Date().toISOString().slice(0, 10)}`)

  var total = 0
  var meal = 0
  for (const ex of expenses) {
    if (ex.isMeal()) {
      meal += ex.amount
    }
    total += ex.amount
    console.info(`${ex.name} ${ex.amount}eur ${ex.isOverMealExpense() ? '[over-expense!]' : ''}`)
  }
  console.info(`Meal expenses: ${meal}eur`)
  console.info(`Total expenses: ${total}eur`)
}

