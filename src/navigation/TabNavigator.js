import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/Feather";

import OverviewScreen from "../screens/overview/OverviewScreen";
import ProductsScreen from "../screens/products/ProductsScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#181f3d",
          borderTopEndRadius: 45,
          borderTopStartRadius: 45,
          height: 65,
          paddingBottom: 5,
          position: "absolute",
          bottom: 0,
          borderTopWidth: 0,

          shadowColor: "#80d3ff",
          shadowOpacity: 1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          elevation: 20,
        },
      }}
    >
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="home"
              color="#c3deed"
              size={23}
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
            bottom: 6,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />

      <Tab.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="shopping-bag"
              color="#c3deed"
              size={23}
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
            bottom: 6,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          headerTitle: "",
          tabBarIcon: ({ color, size, focused }) => (
            <Icons
              name="user"
              color="#c3deed"
              size={23}
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
            bottom: 6,
            fontSize: 12,
            color: "#c3deed",
          },
        }}
      />
    </Tab.Navigator>
  );
}
