import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colorsPalette } from "../../utils/enums";

const AccountInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View>
          <Text style={styles.titleText}>Account Number</Text>
          <Text style={styles.dataText}>29239748323</Text>
        </View>

        <View>
          <Text style={styles.titleText}>Account Owner</Text>
          <Text style={styles.dataText}>Dalvin Segura</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          borderBottomColor: "rgba(255, 255, 255, 0.3)",
          borderBottomWidth: 0.3,
          paddingBottom: 25,
        }}
      >
        <View>
          <Text style={styles.titleText}>Available Balance</Text>
          <Text style={styles.cashText}>$5,563.23</Text>
        </View>

        <View style={styles.iconsContainer}>
          <FeatherIcon
            name="share-2"
            size={25}
            color={colorsPalette.extraLightBlue}
            style={{ marginRight: 25 }}
          />
          <Ionicons
            name="qr-code-outline"
            size={25}
            color={colorsPalette.extraLightBlue}
            style={{ marginRight: 25 }}
          />
          <FeatherIcon
            name="info"
            size={25}
            color={colorsPalette.extraLightBlue}
          />
        </View>
      </View>
    </View>
  );
};

export default AccountInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsPalette.darkBlue,
    paddingHorizontal: 30,
  },

  userInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  titleText: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.4)",
  },
  dataText: {
    fontSize: 16,
    fontWeight: "700",
    color: colorsPalette.extraLightBlue,
    marginTop: 5,
  },

  cashText: {
    fontSize: 28,
    fontWeight: "700",
    color: colorsPalette.seaGreen,
  },

  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
  },
});
