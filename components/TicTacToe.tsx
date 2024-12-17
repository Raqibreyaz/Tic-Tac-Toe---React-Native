import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useBoard } from "@/state/board";
import { Box } from "./Box";
import { ResetButton } from "./ResetButton";
import { ChanceOrWin } from "@/components/ChanceOrWin";

export type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const board = useBoard((state) => state.board);
  const setBoard = useBoard((state) => state.setBoard);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <ChanceOrWin />
      <View>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <Box
                key={`${rowIndex}-${colIndex}`}
                length={board.length}
                value={cell}
                onPress={() => setBoard(rowIndex, colIndex)}
              />
            ))}
          </View>
        ))}
      </View>
      <ResetButton />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "aliceblue",
    fontSize: 40,
    marginBottom: 30,
    fontStyle: "italic",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: { flexDirection: "row" },
});

export default TicTacToe;
