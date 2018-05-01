import React from "react";
import { TextInput, StyleSheet } from "react-native";

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[
      styles.input,
      props.style,
      !props.valid && props.touched ? styles.invalid : null
    ]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    marginTop: 8,
    marginBottom: 8,
    padding: 5
  },
  invalid: {
    backgroundColor: "#fc9090",
    borderColor: "red"
  }
});

export default defaultInput;
