import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyle } from "../../constants/styles";

const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <Text style={styles.noExpensesText}>{fallbackText}</Text>
      )}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  noExpensesText: {
    color: "white",
    fontSize: 16,
    marginTop: 32,
    textAlign: "center",
  },
});
