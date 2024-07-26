import { FlatList, StyleSheet, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(wrapperItem) {
  const {
    item: { description, date, amount },
  } = wrapperItem;

  return <ExpenseItem description={description} date={date} amount={amount} />;
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ExpensesList;

const styles = StyleSheet.create({});
