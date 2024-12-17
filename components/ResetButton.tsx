import { View, Text, Pressable } from "react-native";
import React from "react";
import { useBoard } from "@/state/board";

export function ResetButton() {
  const resetBoard = useBoard((state) => state.resetBoard);
  return (
    <View>
      <Pressable
        style={{
          borderWidth: 1,
          borderRadius: 15,
          padding: 10,
          backgroundColor: "sienna",
        }}
        onPress={() => {
          resetBoard();
        }}
      >
        <Text
        style={{ color: "oldlace" }}
        >
          Reset Game
        </Text>
      </Pressable>
    </View>
  );
}
