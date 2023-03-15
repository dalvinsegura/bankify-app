import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorsPalette } from "../utils/enums";
import FeatherIcon from "react-native-vector-icons/Feather";

const TransationHistory = () => {
  return (
    <View style={styles.transationContainer}>
      <View style={styles.iconTransationContainer}>
        <FeatherIcon
          name="arrow-up-right"
          size={25}
          color={colorsPalette.extraLightBlue}
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          flexGrow: 2,
        }}
      >
        <View>
          <Text style={styles.smallText}>04/12/20</Text>
          <Text style={styles.nameTransationText}>Burger King</Text>
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.smallText}>via Primary Card</Text>
          <Text style={styles.amount}>- $435</Text>
        </View>
      </View>
    </View>
  );
};

export default TransationHistory;

const styles = StyleSheet.create({
  transationContainer: {
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.9)",
    paddingBottom: 20,
  },
  iconTransationContainer: {
    width: 45,
    aspectRatio: 1 / 1,
    borderRadius: 2000,
    borderWidth: 2,
    borderColor: colorsPalette.extraLightBlue,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  smallText: {
    fontSize: 12,
    fontWeight: "bold",
    color: colorsPalette.extraLightBlue,
    opacity: 0.6,
  },
  nameTransationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colorsPalette.extraLightBlue,
    opacity: 0.7,
    marginTop: 7,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: colorsPalette.razzmatazz,
    marginTop: 7,
  },
});
