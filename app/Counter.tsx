import React, { Component, ReactNode } from "react";
import { Button, Text, View } from "react-native";

export default class Counter extends Component {
  constructor(props: any) {
    super(props);
    console.log("component is being created with the props",props);
  }

  state = {
    count: 0,
  };

  static getDerivedStateProps(nextProps: any, prevState: any){
    console.log("get derived state from props", nextProps, prevState);
  } 

  getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
      console.log("Snapshot of previous state",prevState)
      return null
  }
 
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    console.log(`should component updated for count `,nextState);
    return true;
  }

  componentDidMount(): void {
    console.log("component mounted");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{}>,
    snapshot?: any
  ): void {
    console.log("component did update from count", prevState);
  }

  componentWillUnmount(): void {
    console.log("component being unmounted")
  }

  incrementCount = () => {
    let updateCount = this.state.count + 1;
    this.setState({ count: updateCount });
  };
  render() {

    console.log("component is rendering");
    return (
      <View>
        <Text>Count :{this.state.count}</Text>
        <Button title="Increment" onPress={this.incrementCount} />
      </View>
    );
  }
}
