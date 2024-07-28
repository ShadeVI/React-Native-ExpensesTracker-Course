import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/expenses-context";
import { getDate7DaysAgo, isDateBetween } from "../util/date";

const RecentExpenses = () => {
  const { expenses } = useExpenses();

  const filteredExpenses = expenses.filter((expense) => {
    return isDateBetween(expense.date, getDate7DaysAgo());
  });

  return (
    <ExpensesOutput
      expenses={filteredExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses found for the last 7 days"
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
