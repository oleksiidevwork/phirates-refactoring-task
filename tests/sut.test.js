import { mockClient } from './client.mock'
import { report } from '../sut'
import Expense from '../components/Expense'
import { expect } from '@jest/globals'

/**
 * we will mock DataAPIClient using the mock client
 */
mockClient()

describe('expense reporter', () => {
  it('Total expenses', async () => {
    await report()
  })
})

describe('Expense class tester', () => {
  it('Check if expense is for meal', () => {
    const expense = new Expense('Lunch', 'meal', 60, 50)
    expect(expense.isMeal()).toEqual(true)
  })

  it('Check if expense is for meal', () => {
    const expense = new Expense('Car rent', 'rent', 11, 43)
    expect(expense.isMeal()).toEqual(false)
  })

  it('Check if meal expense is over the threshold', () => {
    const expense = new Expense('Car rent', 'rent', 60, 50)
    expect(expense.isOverMealExpense()).toEqual(false)
  })

  it('Check if meal expense is over the threshold', () => {
    const expense = new Expense('Lunch', 'meal', 30.20, 50)
    expect(expense.isOverMealExpense()).toEqual(false)
  })

  it('Check if meal expense is over the threshold', () => {
    const expense = new Expense('Dinner', 'meal', 31.20, 11)

    expect(expense.isOverMealExpense()).toEqual(true)
  })
})
