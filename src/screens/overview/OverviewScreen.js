import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Header from "../../components/Header";

const OverviewScreen = () => {
  return (
    <>
      <View style={styles.background} />
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "120%",
    flex: 1,
    backgroundColor: "#181f3d",
  },

  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
});
