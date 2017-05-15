import { StyleSheet } from "react-native";

export const circleSize = 200;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: "absolute"
  },
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "stretch",
    position: 'absolute'
  }
});

export default styles;
