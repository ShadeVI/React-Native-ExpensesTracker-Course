import { StyleSheet, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return <ExpensesOutput expenses={[]} expensesPeriod="Last 7 days" />;
};

export default RecentExpenses;

const styles = StyleSheet.create({});