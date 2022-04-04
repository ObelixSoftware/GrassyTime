import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Button } from "@rneui/themed";
import Cards from "./components/Cards";
const { height } = Dimensions.get("screen");

const App = () => {
  return (
    <View style={styles.container}>
      <Button
              title={"React Native Elements"}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
            />
            <Cards/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
