import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#cd853f",
    fontSize: 10,
    fontWeight: "bold",
    opacity: 1
  },

  textProfilePage: {
    color: "brown",
    fontSize: 19,
    marginLeft: 16,
    fontWeight: "bold",
    fontStyle: "italic",

    justifyContent: "center",
    alignItems: "center"
  },

  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    right: 0,

    opacity: 0.5,
    backgroundColor: "black",
    height: "100%",
    width: "100%"
  },
  listitem: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    height: 180,
    flexDirection: "row"
  },
  transparent: {
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    flexDirection: "row"
  },
  thumbnail: {
    backgroundColor: "white",
    opacity: 2
  },
  background: {
    width: null,
    flex: 1
  }
});
export default styles;
