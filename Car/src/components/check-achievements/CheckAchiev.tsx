import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import UserStatisticService from "../../../api-service/user-service/UserStatisticService";
import UserStatistic from "../../../models/user/UserStatistic";
import AuthContext from "../auth/AuthContext";
import ModalBadge from "../badge-popup/ModalBadge";
import { View } from "react-native";
import CheckAchievContext from "./CheckAchievContext";
import BadgeProps from "../badge/BadgeProps";
import allBadges from "../badge/BadgeObjects";
import BadgeTypes from "../badge/BadgeTypes";

const CheckAchiev = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [currentAchiev, setCurrentAchiev] = useState<UserStatistic>();
    const [allowCheckAchiev, setAllowCheckAchiev] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [badgesArray] = useState(Array<BadgeProps>());
    const [currentBadge] = useState(Array<BadgeProps>());

    let storageAchieve: UserStatistic;
    let curent: number = 0;

    (user?.isPolicyAccepted && allowCheckAchiev) ? (
        UserStatisticService.getUserStatisticById(user.id as number).then((result) =>
        {
            setCurrentAchiev(result.data);
            setAllowCheckAchiev(false);
            currentAchiev ? (
                AsyncStorage.getItem("achiev").then((res)=>
                {
                    res ? (
                        storageAchieve = JSON.parse(res),
                        console.log(res),
                        Check(),
                        AsyncStorage.setItem("achiev", JSON.stringify(currentAchiev)),

                        currentBadge[curent] ? (
                            setShowModal(true)
                        ):(null)
                    ):(
                        AsyncStorage.setItem("achiev", JSON.stringify(currentAchiev)),
                        storageAchieve = currentAchiev as UserStatistic,
                        console.log("setStorage from backend"),
                        Check()
                    );
                })
            ):(null);
        })):(null);

    function Check () {
        for (let index = 0; index < allBadges.length; index++){

            if (allBadges[index].type === BadgeTypes.passengerRides) {
                (currentAchiev!.passangerJourneysAmount >= allBadges[index].points) ?
                    (
                        allBadges[index].isReached = true,
                        (storageAchieve!.passangerJourneysAmount < allBadges[index].points) ?
                            (
                                currentBadge[curent] = allBadges[index]
                            ):(null)
                    ):(null);
                badgesArray.push(allBadges[index]);
            }
            else
            if (allBadges[index].type === BadgeTypes.driverRides) {
                (currentAchiev!.driverJourneysAmount >= allBadges[index].points) ?
                    (
                        allBadges[index].isReached = true,
                        (storageAchieve!.driverJourneysAmount < allBadges[index].points) ?
                            (
                                currentBadge[curent] = allBadges[index]
                            ):(null)
                    ):(null);
                badgesArray.push(allBadges[index]);
            }
            else
            if (allBadges[index].type === BadgeTypes.driverDistance) {
                (currentAchiev!.totalKm >= allBadges[index].points) ?
                    (
                        allBadges[index].isReached = true,
                        (storageAchieve!.totalKm < allBadges[index].points) ?
                            (
                                currentBadge[curent] = allBadges[index]
                            ):(null)
                    ):(null);
                badgesArray.push(allBadges[index]);
            }
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <CheckAchievContext.Provider value={{ badges: badgesArray }}>
                {children}
                <ModalBadge
                    visible={showModal}
                    image={currentBadge[curent]?.pathUnlocked}
                    closeFunc={()=>setShowModal(false)}
                />
            </CheckAchievContext.Provider>
        </View>
    );
};

export default CheckAchiev;
