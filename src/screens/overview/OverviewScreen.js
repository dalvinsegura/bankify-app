import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import AccountBankBox from "../../components/AccountBankBox";
import DebitCardPreview from "../../components/DebitCardPreview";

import { colorsPalette } from "../../utils/enums";

import Header from "../../components/Header";

const OverviewScreen = () => {
  return (
    <>
      <View style={styles.background} />
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={{ flex: 1, alignItems: "center", marginBottom: 170 }}>
            <AccountBankBox />
            <DebitCardPreview />
            <DebitCardPreview />
            <DebitCardPreview />
          </View>
        </ScrollView>
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
    backgroundColor: colorsPalette.darkBlue,
  },

  container: {
    width: "100%",
  },

  scrollViewContainer: {
    marginHorizontal: "auto",
  },
});
