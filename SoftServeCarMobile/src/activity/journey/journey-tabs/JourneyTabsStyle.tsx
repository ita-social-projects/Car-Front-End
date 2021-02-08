import { StyleSheet } from "react-native";
import Font from "../../../components/fonts/Font";

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
    fontFamily: Font.OpenSans.ExtraBold,
    fontSize: 20,
    fontWeight: "700",
  },

  blackButtonText: {
    color: 'black',
  },

  headerTitleStyle: {
    fontFamily: Font.OpenSans.ExtraBold,
    fontWeight: "700",
    fontSize: 20,
  }
});

export default JourneyTabsStyle;
