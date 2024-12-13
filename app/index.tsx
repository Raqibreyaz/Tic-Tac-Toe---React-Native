import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import Counter from "./Counter";
import CounterFC from "./CounterFC";

const index = () => {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <View>
      <Button
        title="Toggle Counter"
        onPress={() => setShowCounter(!showCounter)}
      ></Button>
      {showCounter ? <CounterFC /> : <Text>Counter is Unmounted</Text>}
    </View>
  );
};

export default index;
