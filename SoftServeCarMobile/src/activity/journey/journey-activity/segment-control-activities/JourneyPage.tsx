import React, { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View, FlatList } from "react-native";
import BottomPopup from "../../../../components/BottomPopup/BottomPopup";
import { container } from "tsyringe";
import JourneyService from "../../../../../api-service/journeyService/JourneyService";
import { Journey } from "../../../../../models/Journey";
import * as RootNavigation from "../../../../components/navigation/RootNavigation";
import Moment from "moment";
import { User } from "../../../../../models/User";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider } from "react-native-elements";
import { StopType } from "../../../../../models/StopType";
import { Stop } from "../../../../../models/Stop";
import JourneyPageStyle from "./JourneyPageStyle";

const JourneyPage = (props: any) => {
  const journeyService = container.resolve(JourneyService);
  const [currentJourney, setJourney] = useState({} as Journey);

  useEffect(() => {
    journeyService
      .getJourney(1)
      .then((res) => setJourney(res.data))
      .catch((e) => console.log(e));
  }, []);

  const Separator = () => {
    return <Divider style={JourneyPageStyle.separator} />;
  };

  const Organizer = () => {
    return (
      <View style={JourneyPageStyle.userBlock}>
        <View style={JourneyPageStyle.userImageBlock}>
          <Image
            style={JourneyPageStyle.userImage}
            source={require("../../../../../assets/images/default-user-photo.jpg")}
          />
        </View>
        <View style={JourneyPageStyle.userInfoBlock}>
          <Text style={JourneyPageStyle.userNameText}>
            {currentJourney?.organizer?.name}{" "}
            {currentJourney?.organizer?.surname}'s journey
          </Text>
          <View style={JourneyPageStyle.userSecondaryInfoBlock}>
            <Text style={JourneyPageStyle.userRoleText}>
              {currentJourney?.organizer?.position}
            </Text>
            <Text style={JourneyPageStyle.dateText}>
              {Moment(currentJourney?.departureTime).calendar()}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const StopListItem = (item: Stop) => {
    return (
      <View style={JourneyPageStyle.stopListItem}>
        <View style={JourneyPageStyle.stopListItemRow}>
          <Ionicons name={"ellipse"} size={18} color={"#AAA9AE"} />
          {item?.type !== StopType.Finish && (
            <View style={JourneyPageStyle.stopCustomLineIcon} />
          )}
        </View>
        <Text>
          {item?.address.city} {item?.address.street} street
        </Text>
      </View>
    );
  };

  const StopsBlock = () => {
    return (
      <View style={JourneyPageStyle.stopsBlock}>
        <FlatList
          data={currentJourney?.stops}
          renderItem={({ item }) => StopListItem(item)}
          keyExtractor={(item) => item!.id.toString()}
        />
      </View>
    );
  };

  const Applicant = (item: User) => {
    return (
      <>
        <View style={JourneyPageStyle.userBlock}>
          <View style={JourneyPageStyle.userImageBlock}>
            <Image
              style={JourneyPageStyle.userImage}
              source={require("../../../../../assets/images/default-user-photo.jpg")}
            />
          </View>
          <View style={JourneyPageStyle.userInfoBlock}>
            <Text style={JourneyPageStyle.applicantNameText}>
              {item?.name} {item?.surname}
            </Text>
            <View style={JourneyPageStyle.userSecondaryInfoBlock}>
              <Text style={JourneyPageStyle.userRoleText}>
                {item?.position}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={JourneyPageStyle.ellipsisButton}
            onPress={() =>
              RootNavigation.navigate("Applicant Page", { userId: item?.id })
            }
          >
            <Ionicons name={"ellipsis-horizontal"} color={"black"} size={25} />
          </TouchableOpacity>
        </View>
        <Separator />
      </>
    );
  };

  const ApplicantsBlock = () => {
    return (
      <View style={JourneyPageStyle.applicantsBlock}>
        <Text style={JourneyPageStyle.applicantsHeader}>
          SOFTSERVIANS {currentJourney?.participants?.length}/
          {currentJourney?.countOfSeats}
        </Text>
        <FlatList
          data={currentJourney?.participants}
          renderItem={({ item }) => Applicant(item)}
          keyExtractor={(item) => item!.id.toString()}
        />
      </View>
    );
  };

  const ButtonsBlock = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: 'space-between'  }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 3,
            width: '40%'
          }}
        >
          <Text style={{ color: "black", fontWeight: '700', textAlign: 'center', height: 45, fontSize: 18, textAlignVertical: 'center' }}>MESSAGE ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            width: '55%',
          }}
        >
          <Text style={{ color: "white", fontWeight: '700', textAlign: 'center', height: 45, fontSize: 18, textAlignVertical: 'center' }}>START THE JOURNEY</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const content = () => {
    return (
      <View style={JourneyPageStyle.mainContainer}>
        <View style={JourneyPageStyle.contentView}>
          <Organizer />
          <StopsBlock />
          <Separator />
          <ApplicantsBlock />
          <ButtonsBlock />
        </View>
      </View>
    );
  };

  return (
    <BottomPopup
      style={JourneyPageStyle.bottomPopup}
      snapPoints={["80%", "45%", "40%", "35%", "30%", "25%", "20%", "15%"]}
      renderContent={content}
      initialSnap={0}
      renderHeader={() => {}}
      enabledInnerScrolling={false}
    ></BottomPopup>
  );
};

export default JourneyPage;
