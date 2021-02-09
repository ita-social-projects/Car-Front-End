import { useNavigation } from "@react-navigation/native";
import Moment from "moment";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "reanimated-bottom-sheet";
import { container } from "tsyringe";
import JourneyService from "../../../../../../api-service/journey-service/JourneyService";
import { Journey } from "../../../../../../models/Journey";
import { Stop } from "../../../../../../models/Stop";
import { StopType } from "../../../../../../models/StopType";
import { User } from "../../../../../../models/User";
import BottomPopup from "../../../../../components/bottom-popup/BottomPopup";
import MenuButton from "../../../../../components/bottom-popup/menu-button/MenuButton";
import JourneyPageStyle from "./JourneyPageStyle";

const JourneyPage = ({ route }: any) => {

  const { journeyId } = route.params;

  const [moreOptionsState, setMoreOptionsState] = useState(0);
  const journeyService = container.resolve(JourneyService);
  const [currentJourney, setJourney] = useState({} as Journey);
  const navigation = useNavigation();

  const moreOptionsRef = React.useRef<BottomSheet>(null);

  const moreOptionsContent = () => (
    <View style={JourneyPageStyle.panel}>
      <MenuButton
        text="View profile"
        onPress={() =>
          navigation.navigate("Applicant Page", { userId: moreOptionsState })
        }
      />
      <MenuButton
        text="Message"
        onPress={() => navigation.navigate("Messages", {})}
      />
        <MenuButton
            text="New Applicant"
            onPress={() => navigation.navigate("New Applicant Page", {})}
        />
    </View>
  );

  const moreOptionsHeader = () => (
    <View style={JourneyPageStyle.headerTitleStyle}>
      <Text style={JourneyPageStyle.headerTextStyle}>More options</Text>
    </View>
  );

  useEffect(() => {
    journeyService
      .getJourney(journeyId)
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
            source={require("../../../../../../assets/images/default-user-photo.jpg")}
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
              source={require("../../../../../../assets/images/default-user-photo.jpg")}
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
            onPress={() => {
              setMoreOptionsState(item!.id);
              moreOptionsRef.current?.snapTo(1);
            }}
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
      <View style={JourneyPageStyle.buttonsBlock}>
        <TouchableOpacity style={JourneyPageStyle.messageAllButton}>
          <Text style={JourneyPageStyle.messageAllButtonText}>MESSAGE ALL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={JourneyPageStyle.startJourneyButton}>
          <Text style={JourneyPageStyle.startJourneyButtonText}>
            START THE JOURNEY
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const journeyInfoContent = () => {
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
    <>
      <BottomPopup
        style={JourneyPageStyle.bottomPopup}
        snapPoints={["80%", "45%", "40%", "35%", "30%", "25%", "20%", "15%"]}
        renderContent={journeyInfoContent}
        initialSnap={0}
        renderHeader={() => { }}
        enabledInnerScrolling={false}
      />
      <BottomPopup
        refForChild={moreOptionsRef}
        snapPoints={[0, 200]}
        renderContent={moreOptionsContent}
        initialSnap={0}
        renderHeader={moreOptionsHeader}
        enabledInnerScrolling={false}
      //onCloseEnd={() => props.setIsOpen(false)}
      />
    </>
  );
};

export default JourneyPage;
