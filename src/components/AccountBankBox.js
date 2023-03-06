import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

import { colorsPalette } from "../utils/enums";

const AccountBankBox = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderPurpleLeft} />
      <View style={styles.firstSection}>
        <Ionicons
          style={[styles.secondaryIcon, styles.treeDotsIcon]}
          name="ellipsis-vertical"
          size={20}
        />
        <View style={styles.walletIconCircle}>
          <Ionicons
            style={[styles.secondaryIcon, styles.walletIcon]}
            name="wallet"
            size={30}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={styles.accountNumberContainer}>
            <Text style={styles.title}>Account Number</Text>
            <Text style={styles.dataText}>123123123131</Text>
          </View>

          <View style={styles.availableBalanceContainer}>
            <Text style={styles.title}>Available Balanace</Text>
            <Text style={styles.dataTextBalance}>$5,563.23</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondSection}>
        <View style={styles.newPaymentContainer}>
          <FeatherIcon
            style={[styles.secondaryIcon, styles.newPaymentIcon]}
            name="plus-circle"
            size={30}
            solid
          />
          <Text style={styles.newPaymentText}>New Payment</Text>
        </View>

        <Ionicons style={styles.secondaryIcon} name="share-social" size={30} />
      </View>
    </SafeAreaView>
  );
};

export default AccountBankBox;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingTop: 30,
    marginTop: 15,
    borderRadius: 15,

    backgroundColor: colorsPalette.lightBlue,
  },
  firstSection: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  treeDotsIcon: {
    position: "absolute",
    top: 0,
    right: 15,
  },
  secondaryIcon: {
    color: colorsPalette.extraLightBlue,
    fontSize: 25,
  },

  walletIconCircle: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colorsPalette.extraLightBlue,
    borderRadius: 200,
    marginRight: 25,
  },
  walletIcon: {
    fontSize: 32,
  },
  borderPurpleLeft: {
    width: 2,
    height: "100%",
    position: "absolute",
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,

    top: 15,
    left: 0,
    backgroundColor: colorsPalette.electricPurple,
  },
  accountNumberContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.4)",
  },
  dataText: {
    fontSize: 16,
    fontWeight: "700",
    color: colorsPalette.extraLightBlue,
  },
  availableBalanceContainer: {
    marginBottom: 20,
  },
  dataTextBalance: {
    fontSize: 28,
    fontWeight: "700",
    color: colorsPalette.seaGreen,
  },
  secondSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 25,
    borderTopColor: "rgba(255,255,255,0.4)",
    borderTopWidth: 0.5,
  },
  newPaymentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  newPaymentIcon: {
    marginRight: 10,
  },
  newPaymentText: {
    fontSize: 16,
    fontWeight: "700",
    color: colorsPalette.extraLightBlue,
  },
});
