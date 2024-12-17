import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useBoard } from "@/state/board";

export const ChanceOrWin = () => {
  const { winner, currentPlayer } = useBoard();
  return (
    <View>
      <Text style={styles.chance}>
        {winner ? `${winner} Wins!` : `Player: ${currentPlayer}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    chance: { fontSize: 24, marginBottom: 20 ,color:"oldlace"},
});
