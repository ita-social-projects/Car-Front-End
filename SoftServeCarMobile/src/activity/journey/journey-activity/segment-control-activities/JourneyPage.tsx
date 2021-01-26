import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomPopup from "../../../../components/bottom-popup/BottomPopup";
import { container } from "tsyringe";
import { AuthContext } from "../../../auth/AuthProvider";
import JourneyService from "../../../../../api-service/journeyService/JourneyService";
import { Journey } from "../../../../../models/Journey";

const JourneyPage = () => {
  const journeyService = container.resolve(JourneyService);
  const { user } = useContext(AuthContext);
  const [currentJourney, setJourney] = useState({} as Journey);
  journeyService
    .getJourney(1)
    .then((res) => setJourney(res.data))
    .catch((e) => console.log(e));

  const content = () => {
    return (
      <View style={styles.contentView}>
        <TouchableOpacity style={styles.organizerBlock}>
          <View style={styles.organizerImageBlock}>
            <Image
              style={styles.organizerImage}
              source={require("../../../../../assets/images/default-user-photo.jpg")}
            />
          </View>
          <View style={styles.organizerInfoBlock}>
            <Text style={styles.organizerNameText}>
              Maria Kruselnytska's journey
            </Text>
            <View style={styles.organizerSecondaryInfoBlock}>
              <Text style={styles.organizerRoleText}>Experience Designer</Text>
              <Text style={styles.dateText}>Today at 14:15</Text>
              <Text>{currentJourney?.id}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <BottomPopup
        style={{ backgroundColor: "white" }}
        snapPoints={[
          "50%",
          "45%",
          "40%",
          "35%",
          "30%",
          "25%",
          "20%",
          "15%",
          "10%",
        ]}
        renderContent={content}
        initialSnap={0}
      ></BottomPopup>
    </>
  );
};

export default JourneyPage;

const styles = StyleSheet.create({
  contentView: {
    backgroundColor: "white",
    height: Dimensions.get("window").height / 2,
    alignItems: "center",
  },
  organizerBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  organizerImageBlock: {
    flex: 1,
    alignItems: "flex-start",
  },
  organizerImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  organizerInfoBlock: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 5,
  },
  organizerNameText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "Open-Sans-Regular",
  },
  organizerSecondaryInfoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  organizerRoleText: {
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
});
