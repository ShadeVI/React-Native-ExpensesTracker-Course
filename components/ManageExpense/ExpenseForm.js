import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyle } from "../../constants/styles";
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const [formInputs, setFormInputs] = useState({
    amount: {
      value: defaultValues?.amount.toString() ?? "",
      isValid: !!defaultValues,
    },
    date: {
      value: getFormattedDate(defaultValues?.date) ?? "",
      isValid: !!defaultValues,
    },
    description: {
      value: defaultValues?.description ?? "",
      isValid: !!defaultValues,
    },
  });
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const submitHandler = () => {
    setIsFormInvalid(false);
    const isAmountValid =
      formInputs.amount.value &&
      formInputs.amount.value > 0 &&
      !isNaN(formInputs.amount.value);
    const isDateValid =
      formInputs.date.value && !isNaN(new Date(formInputs.date.value));
    const isDescriptionValid = formInputs.description.value;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      setFormInputs((prevState) => {
        return {
          ...prevState,
          amount: { ...prevState.amount, isValid: isAmountValid },
          date: { ...prevState.date, isValid: isDateValid },
          description: {
            ...prevState.description,
            isValid: isDescriptionValid,
          },
        };
      });
      setIsFormInvalid(true);
      return;
    }
    setIsFormInvalid(false);

    const expenseData = {
      amount: +formInputs.amount.value,
      date: new Date(formInputs.date.value),
      description: formInputs.description.value,
    };

    onSubmit(expenseData);
  };

  const formInputHandler = (inputName, enteredValue) => {
    setIsFormInvalid(false);
    setFormInputs((prevState) => ({
      ...prevState,
      [inputName]: { value: enteredValue, isValid: true },
    }));
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          invalid={!formInputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: formInputHandler.bind(this, "amount"),
            value: formInputs.amount.value,
          }}
        />
        <Input
          label="Date"
          invalid={!formInputs.date.isValid}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: formInputHandler.bind(this, "date"),
            value: formInputs.date.value,
          }}
        />
      </View>
      <View style={styles.inputRow}>
        <Input
          label="Description"
          invalid={!formInputs.description.isValid}
          textInputConfig={{
            multiline: true,
            //autoCapitalize: "none",
            //autoCorrect: false,
            onChangeText: formInputHandler.bind(this, "description"),
            value: formInputs.description.value,
          }}
        />
      </View>
      {isFormInvalid && (
        <Text style={styles.errorText}>Invalid inputs - Check values</Text>
      )}
      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  errorText: {
    textAlign: "center",
    color: GlobalStyle.colors.error500,
    backgroundColor: GlobalStyle.colors.error50,
    borderRadius: 4,
    padding: 8,
    margin: 8,
    fontSize: 16,
  },
});
