import DataAPIClient from '../api/Client'
import Expense from '../components/Expense'
import { EXPENSE_DETAILS, TYPE } from '../config'

class DataAPIClientMock {

  constructor(serverAddress) {
    serverAddress;
  }
  /**
    * Let's assume we got a payload from api server.
    * Data structure depends on the backend implementation but we will follow the test assessment's data structure
  */
  getExpenses() {
    const response = [
      { type: TYPE.BREAKFAST, amount: 15.20 },
      { type: TYPE.BREAKFAST, amount: 28.10 },
      { type: TYPE.LUNCH, amount: 10.20 },
      { type: TYPE.DINNER, amount: 16.00 },
      { type: TYPE.DINNER, amount: 120.20 },
      { type: TYPE.CAR_RENTAL, amount: 300.20 }

    ] // the payload from backend

    // we will fill some properties like type and threshold
    const expenses = response.map((ex) => {
      const detail = EXPENSE_DETAILS.find(
        (d) => d.value === ex.type
      )
      const { name, type, threshold } = detail 
      const expense = new Expense(name, type, ex.amount, threshold)
      return expense
    })
    return expenses
  }
}

const mockClient = () => {
  const instance = new DataAPIClientMock('');
  jest.spyOn(DataAPIClient, 'getExpenses').mockImplementation(() => {
    return instance.getExpenses();
  });
  return instance;
};

export { mockClient, DataAPIClientMock };
