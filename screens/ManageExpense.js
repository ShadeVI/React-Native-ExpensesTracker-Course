import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyle } from "../constants/styles";
import { useExpenses } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expensesContext = useExpenses();
  const expenseId = route.params?.expenseId;
  const selectedExpense = expensesContext.expenses.find(
    (expense) => expense.id === expenseId
  );
  const isEditing = !!expenseId;

  const deleteExpenseHandler = () => {
    expensesContext.deleteExpense(expenseId);
    navigation.goBack();
  };

  const cancelHandler = () => navigation.goBack();

  const onSubmitHandler = (expenseData) => {
    if (isEditing) {
      expensesContext.updateExpense(expenseId, expenseData);
    } else {
      expensesContext.addExpense(expenseData);
    }
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Editing expense: ${expenseId}` : "Adding new expense",
    });
  }, [isEditing, expenseId, navigation]);

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onSubmit={onSubmitHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            color={GlobalStyle.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};
export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    padding: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyle.colors.primary200,
    alignItems: "center",
  },
});
