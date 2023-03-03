import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Feather";
import * as native from "@react-navigation/native";

import OverviewScreen from "../screens/overview/OverviewScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#131F3D",
          borderTopEndRadius: 45,
          borderTopStartRadius: 45,
          height: 65,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="home"
              color="#c3deed"
              size={size}
              style={
                focused
                  ? {
                      borderTopWidth: 2.5,
                      borderTopColor: "#80d3ff",
                      paddingHorizontal: 10,
                      paddingTop: 10,
                      position: "absolute",
                      top: 0,
                      paddingBottom: 10,
                    }
                  : { position: "absolute", top: 10 }
              }
            />
          ),

          tabBarLabelStyle: {
            position: "absolute",
            bottom: 3,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="shopping-bag"
              color="#c3deed"
              size={size}
              style={
                focused
                  ? {
                      borderTopWidth: 2.5,
                      borderTopColor: "#80d3ff",
                      paddingHorizontal: 10,
                      paddingTop: 10,
                      position: "absolute",
                      top: 0,
                      paddingBottom: 10,
                    }
                  : { position: "absolute", top: 10 }
              }
            />
          ),
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 3,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="user"
              color="#c3deed"
              size={size}
              style={
                focused
                  ? {
                      borderTopWidth: 2.5,
                      borderTopColor: "#80d3ff",
                      paddingHorizontal: 10,
                      paddingTop: 10,
                      position: "absolute",
                      top: 0,
                      paddingBottom: 10,
                    }
                  : { position: "absolute", top: 10 }
              }
            />
          ),
          tabBarLabelStyle: {
            position: "absolute",
            bottom: 3,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />
    </Tab.Navigator>
  );
}
