import { createContext, useContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e9",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e10",
    description: "Another book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
  {
    id: "e11",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e12",
    description: "A book",
    amount: 14.99,
    date: new Date("2024-07-22"),
  },
  {
    id: "e13",
    description: "Another book",
    amount: 18.59,
    date: new Date("2024-07-27"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: ({ id, description, amount, date }) => {},
});

export const expensesActions = {
  ADD: "ADD",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
};

const expensesReducer = (state, action) => {
  switch (action.type) {
    case expensesActions.ADD:
      const newId = new Date().toString() + Math.random().toString();
      return [...state, { ...action.payload, id: newId }];
    case expensesActions.DELETE:
      return state.filter((expense) => expense.id !== action.payload);
    case expensesActions.UPDATE:
      const expenseToUpdate = state.find(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = { ...expenseToUpdate, ...action.payload.data };
      const updatedExpenses = state.map((expense) =>
        expense.id === action.id ? updatedExpense : expense
      );
      return updatedExpenses;
    default:
      return state;
  }
};

export const ExpensesProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({
      type: expensesActions.ADD,
      payload: expenseData,
    });
  };

  const deleteExpense = (id) => {
    dispatch({
      type: expensesActions.DELETE,
      payload: id,
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: expensesActions.UPDATE,
      payload: { id, data: expenseData },
    });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);
