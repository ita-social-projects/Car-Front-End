import { StyleSheet } from "react-native";

const JourneyTabsStyle = StyleSheet.create({

  journeyPageIcon: {
    paddingRight: 12,
  },

  backButtonOpacity: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backButtonTextView: {
    flexDirection: "column",
    justifyContent: "center",
  },

  backButtonText: {
    color: "#02A2CF",
    fontFamily: "Open-Sans-Regular",
    fontSize: 20,
    fontWeight: "700",
  },

  headerTitleStyle: {
    fontFamily: "Open-Sans-Regular",
    fontWeight: "700",
    fontSize: 20,
  }
});

export default JourneyTabsStyle;
