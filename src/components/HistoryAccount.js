import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { colorsPalette } from "../utils/enums";

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
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, rBottomSheetStyle]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
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
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "bold",
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});
