import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyle } from "../../constants/styles";

const ExpenseForm = () => {
  const amountChangedHandler = () => null;
  const dateChangedHandler = () => null;
  const descriptionChangedHandler = () => null;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: amountChangedHandler,
          }}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChange: dateChangedHandler,
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            //autoCapitalize: "none",
            //autoCorrect: false,
            onChangeText: descriptionChangedHandler,
          }}
        />
      </View>
    </View>
  );
};
export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginVertical: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: GlobalStyle.colors.primary50,
    textAlign: "center",
    marginVertical: 24,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
