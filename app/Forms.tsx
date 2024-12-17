import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Forms = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.form}>
      <TextInput
        onChangeText={(text: string) => setValue(text)}
        style={styles.input}
        multiline
        numberOfLines={5}
        value={value}
      ></TextInput>
      <TouchableOpacity style={styles.submit}>
        <Text style={{fontSize:20,color:"white"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  form: {
    gap: 10,
  },
  input: {
    borderWidth: 1,
    width: 300,
  },
  submit:{
    borderRadius:20,
    borderWidth:1,
    backgroundColor:"crimson",
    padding:11,
    width:100,
    height:50,
    color:"white"
  }
});
