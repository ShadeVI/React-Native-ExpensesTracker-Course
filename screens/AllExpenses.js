import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return <ExpensesOutput expenses={[]} expensesPeriod="All time expenses" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
