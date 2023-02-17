import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { height: 10, width: 5 },
    elevation: 10,
    overflow: "hidden",
  },
  detailsContainer: {
    margin: 5,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 15,
  },
  title: {
    marginBottom: 10,
    color: colors.secondary,
  },
  subTitle: {
    color: colors.primary,
  },
});
