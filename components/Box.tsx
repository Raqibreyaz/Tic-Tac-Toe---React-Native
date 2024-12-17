import { Player } from "@/components/TicTacToe";
import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("screen");
const vmin = Math.min(screenHeight, screenWidth);

// Define Props for the Cell Component
interface CellProps {
  value: Player;
  onPress: () => void;
  length: number;
}

// Cell Component (with React.memo to prevent unnecessary re-renders)
export const Box: React.FC<CellProps> = React.memo(
  ({ value, onPress, length }) => {
    return (
      <TouchableOpacity
        style={{
          width: vmin / (1.2 * length),
          height: vmin / (1.2 * length),
          ...styles.cell,
        }}
        onPress={onPress}
        disabled={!!value}
      >
        <Text
          style={{
            fontSize: vmin / (1.5 * length),
            color: value === "X" ? "crimson" : "oldlace",
            ...styles.cellText,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    );
  }
);
const styles = StyleSheet.create({
  cell: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0062FF",
  },
  cellText: { fontWeight: "semibold" },
});
