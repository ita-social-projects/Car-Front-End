import React, { useContext, useState, useRef, useEffect } from "react";
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
import { Button } from "react-native";
import * as RootNavigation from "../../../../components/navigation/RootNavigation";
import BottomSheet from "reanimated-bottom-sheet";
import MenuButton from "../../../../components/BottomPopup/MenuButton";
import Moment from "moment";
import { FlatList } from "react-native";
import { User } from "../../../../../models/User";

const JourneyPage = (props: any) => {
  const journeyService = container.resolve(JourneyService);
  const { user } = useContext(AuthContext);
  const [currentJourney, setJourney] = useState({} as Journey);

  useEffect(() => {
    journeyService
      .getJourney(1)
      .then((res) => setJourney(res.data))
      .catch((e) => console.log(e));
  }, []);
  var participants: User[] = [
    {
      id: 5,
      name: "Tanya",
      surname: "Lysak",
      position: "",
      location: "Lviv",
      hireDate: new Date(),
      email: "sat",
      token: "",
      byteOfImage: "",
    },
  ];
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
              {currentJourney?.driver?.name} {currentJourney?.driver?.surname}'s
              journey
            </Text>
            <View style={styles.organizerSecondaryInfoBlock}>
              <Text style={styles.organizerRoleText}>
                {currentJourney?.driver?.position}
              </Text>
              <Text style={styles.dateText}>
                {Moment(currentJourney?.departureTime).calendar()}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View>
          <FlatList
            data={currentJourney?.participants}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Text style={{color: 'black', fontSize: 40}}>{item?.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
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
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: 200,
    backgroundColor: "white",
  },
  headerTitleStyle: {
    paddingLeft: 24,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  headerTextStyle: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    alignItems: "center",
  },
});
