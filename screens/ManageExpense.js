import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? `Editing expense: ${expenseId}` : "Adding new expense",
    });
  }, [isEditing, expenseId, navigation]);

  return (
    <View>
      <Text>ManageExpense</Text>
    </View>
  );
};
export default ManageExpense;

const styles = StyleSheet.create({});
