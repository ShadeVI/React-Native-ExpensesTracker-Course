import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyle } from "../../constants/styles";

const Input = ({ label, invalid, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[
          styles.input,
          textInputConfig.multiline && styles.inputMultiline,
          invalid && styles.invalidInput,
        ]}
        {...textInputConfig}
      />
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: GlobalStyle.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyle.colors.primary700,
    borderWidth: 2,
    borderColor: "transparent",
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidInput: {
    borderColor: GlobalStyle.colors.error500,
    borderWidth: 2,
  },
  invalidLabel: {
    color: GlobalStyle.colors.error50,
  },
});
