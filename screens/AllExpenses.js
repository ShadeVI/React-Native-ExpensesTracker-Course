import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useExpenses } from "../store/expenses-context";

const AllExpenses = () => {
  const { expenses } = useExpenses();
  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="All time expenses"
      fallbackText="No expenses found."
    />
  );
};

export default AllExpenses;

const styles = StyleSheet.create({});
