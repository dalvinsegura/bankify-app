import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesome5Icons from "react-native-vector-icons/FontAwesome5";

const imageSource = require("../assets/card-background.jpg");

const DebitCard = () => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 40,
      }}
    >
      <Image
        resizeMethod="auto"
        source={imageSource}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.cardTypeText}>Primary</Text>
          <FeatherIcon name="more-vertical" size={25} color="#fff" />
        </View>

        <View style={{ flexDirection: "column", marginTop: 30 }}>
          <Text style={styles.cardNumber}>**** ***** **** 2745</Text>
          <View style={styles.expContainer}>
            <Text style={styles.expTitle}>EXP</Text>
            <Text style={styles.expDate}>04/23</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <Text style={styles.cardOwnerName}>Dalvin Segura</Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <FontAwesome5Icons
              name="apple-pay"
              size={25}
              color="#fff"
              style={{ marginRight: 25 }}
            />
            <FontAwesome5Icons name="cc-visa" size={25} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DebitCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  cardTypeText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  cardNumber: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  expContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  expTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)",
  },
  expDate: {
    fontSize: 13,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)",
    marginLeft: 5,
  },
  cardOwnerName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
