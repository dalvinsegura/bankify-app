import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import FeatherIcon from "react-native-vector-icons/Feather";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { colorsPalette } from "../utils/enums";
import TransationHistory from "./TransationHistory";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

const HistoryAccount = () => {
  const translateY = useSharedValue(0);
  const scrollTo = useCallback((destination) => {
    "worklet";
    translateY.value = withSpring(destination, { damping: 50 });
  }, []);
  const context = useSharedValue({ y: 0 });

  const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;
  const MIN_TRANSLATE_Y = (-SCREEN_HEIGHT / 2) * 0.9;

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value >= MIN_TRANSLATE_Y) {
        scrollTo(MIN_TRANSLATE_Y);
      } else if (translateY.value < -SCREEN_HEIGHT / 1.3) {
        scrollTo(MAX_TRANSLATE_Y);
      }
    });

  useEffect(() => {
    scrollTo(MIN_TRANSLATE_Y);
  }, []);

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP
    );
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.container, rBottomSheetStyle]}>
      <GestureDetector gesture={gesture}>
        <Animated.View>
          <View style={styles.line} />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.titleText}>History</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.filterByText}>Spendings</Text>
              <FeatherIcon
                name="chevron-down"
                size={23}
                color="rgba(255, 255, 255, 0.6)"
              />
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TransationHistory />
      </ScrollView>
    </Animated.View>
  );
};

export default HistoryAccount;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colorsPalette.lightBlue,
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingBottom: SCREEN_HEIGHT * 0.08,
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 2,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.6)",
  },
  filterByText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.6)",
    marginRight: 8,
  },
});
