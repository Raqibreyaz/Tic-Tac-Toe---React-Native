import { View, Text, ScrollView } from "react-native";
import React from "react";

const FlexBox = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        gap: 20,
        alignSelf: "flex-end",
      }}
    >
      <View
        style={{
          height:200,
          width:200,
          backgroundColor: "red",
          borderRadius: 20,
          flexGrow:1
        }}
      ></View>
      <View
        style={{
          height:200,
          width:200,
          backgroundColor: "green",
          flexGrow:1,
          borderRadius: 20,
        }}
      ></View>
      <View
        style={{
          height:200,
          width:200,
          backgroundColor: "violet",
          borderRadius: 20,
          flexGrow:1,
        }}
      ></View>
    </View>
  );
};

export default FlexBox;
