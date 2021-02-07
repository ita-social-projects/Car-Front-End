import { Dimensions, StyleSheet } from "react-native";

const JourneyPageStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.8,
  },

  contentView: {
    width: "90%",
    alignSelf: "center",
  },

  userBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  userImageBlock: {
    alignItems: "flex-start",
    justifyContent: "space-around",
    margin: 7,
    marginLeft: 13,
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  userInfoBlock: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 5,
  },

  userNameText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Open-Sans-Regular",
  },

  applicantNameText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Open-Sans-Regular",
    color: "#00A3CF",
  },

  userSecondaryInfoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  userRoleText: {
    fontSize: 13,
    color: "#909095",
    fontWeight: "100",
    fontFamily: "Open-Sans-Regular",
  },

  dateText: {
    fontSize: 13,
    color: "#02A2CF",
    fontWeight: "700",
    fontFamily: "Open-Sans-Regular",
  },
  separator: {
    backgroundColor: "#C1C1C5",
    height: 1,
    width: "100%",
    marginBottom: 7,
    marginTop: 7,
  },

  ellipsisButton: {
    alignItems: "flex-end",
    justifyContent: "center",
  },

  applicantsBlock: {
    marginTop: 15,
  },

  applicantsHeader: {
    fontFamily: "Proxima Nova",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },

  stopsBlock: {
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
    marginLeft: 10,
  },

  stopListItem: {
    flexDirection: "row",
  },

  stopListItemRow: {
    flexDirection: "column",
    alignItems: "center",
  },

  stopCustomLineIcon: {
    backgroundColor: "#AAA9AE",
    height: 12,
    width: 2,
  },

  bottomPopup: {
    backgroundColor: "white",
  },
});

export default JourneyPageStyle;
