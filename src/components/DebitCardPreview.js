import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

import { colorsPalette } from "../utils/enums";

const DebitCardPreview = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.borderPurpleLeft} />
      <View style={styles.firstSection}>
        <Ionicons
          style={[styles.secondaryIcon, styles.treeDotsIcon]}
          name="ellipsis-vertical"
          size={20}
        />
        <View style={styles.visaIconCircle}>
          <FontAwesome
            style={[styles.secondaryIcon, styles.visaIcon]}
            name="cc-visa"
            size={20}
          />
        </View>

        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={styles.cardTypeContainer}>
            <Text style={styles.title}>Card Type</Text>
            <Text style={styles.dataText}>Debit</Text>
          </View>

          <View style={styles.cardNumberContainer}>
            <Text style={styles.title}>Card Number</Text>
            <Text style={styles.dataText}>****** ***** ***2745</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondSection}>
        <FontAwesome
          style={styles.applePayIcon}
          name="apple-pay"
          size={30}
          solid
        />

        <FontAwesome
          style={[styles.secondaryIcon, styles.wifiIcon]}
          name="wifi"
        />
      </View>
    </SafeAreaView>
  );
};

export default DebitCardPreview;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingTop: 30,
    marginTop: 20,
    borderRadius: 15,

    backgroundColor: colorsPalette.lightBlue,
  },
  firstSection: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 25,
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

  visaIconCircle: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colorsPalette.extraLightBlue,
    borderRadius: 200,
    marginRight: 25,
  },
  visaIcon: {
    fontSize: 25,
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
  cardTypeContainer: {
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
  cardNumberContainer: {
    marginBottom: 20,
  },

  secondSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderTopColor: "rgba(255,255,255,0.4)",
    borderTopWidth: 0.5,
  },

  applePayIcon: {
    fontSize: 40,
    color: colorsPalette.extraLightBlue,
  },

  wifiIcon: {
    fontSize: 20,
    transform: [{ rotate: "45deg" }],
  },
});
