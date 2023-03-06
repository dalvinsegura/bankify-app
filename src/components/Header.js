import { StyleSheet, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { colorsPalette } from "../utils/enums.js";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoIcon}
        source={require("../assets/icon-bankify-white.png")}
      />

      <View style={styles.searchNotificationContainer}>
        <Icon
          style={[styles.iconHeader, { marginRight: 30 }]}
          size={23}
          name="search"
        />
        <Icon style={styles.iconHeader} size={23} name="message-square" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: colorsPalette.darkBlue,
    zIndex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 55,
    paddingBottom: 26,
    paddingLeft: 20,
    paddingRight: 40,

    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  logoIcon: {
    width: 45,
    height: 45,
    aspectRatio: 16 / 9,
  },

  searchNotificationContainer: {
    flexDirection: "row",
  },

  iconHeader: {
    color: "#fff",
  },
});
