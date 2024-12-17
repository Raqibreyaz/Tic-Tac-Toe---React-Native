import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useBoard } from "@/state/board";

const ChangeDimensions = () => {
  const { resetBoard } = useBoard();
  return (
    <View style={styles.Dimensions}>
      {[3, 4, 6, 9].map((d) => (
        <Pressable
          key={d}
          onPress={() => resetBoard(d)}
          style={styles.Dimension}
        >
          <Text style={styles.DimensionText}>
            {d} x {d}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ChangeDimensions;

const styles = StyleSheet.create({
  Dimensions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Dimension: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "mediumpurple",
  },
  DimensionText: {
    color:"oldlace"
  },
});
