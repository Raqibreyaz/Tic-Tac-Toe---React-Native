import { View, Text, Button } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

const CounterFC = () => {
  const [count, setCount] = useState(0);
  console.log("hi");
  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
    return () => console.log("cleanup after update");
  }, [count]);

  useLayoutEffect(() => {
    console.log("component is going be updated");
    return () => console.log("cleanup before update");
  }, [count]);
console.log("hi2")
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default CounterFC;
