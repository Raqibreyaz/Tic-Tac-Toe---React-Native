import React, { useEffect } from "react";
import TicTacToe from "@/components/TicTacToe";
import ChangeDimensions from "@/components/ChangeDimensions";
import { View } from "react-native";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "space-evenly",
      }}
    >
      <TicTacToe />
      <ChangeDimensions />
    </View>
  );
}
