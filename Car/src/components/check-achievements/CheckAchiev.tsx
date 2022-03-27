import React, { useContext, useEffect, useState } from "react";
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
import SignalRHubConnection from "../../../api-service/SignalRHubConnection";

const CheckAchiev = ({ children }) => {

    const { user } = useContext(AuthContext);
    const [allowCheckAchiev, setAllowCheckAchiev] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [badgesArray] = useState(Array<BadgeProps>());
    const [currentBadge] = useState(Array<BadgeProps>());

    let storageAchieve: UserStatistic;
    let currentAchieve: UserStatistic;
    let curent: number = 0;

    allowCheckAchiev ? (
        UserStatisticService.getUserStatisticById(user!.id as number).then((result) =>
        {
            currentAchieve = result.data as UserStatistic;
            setAllowCheckAchiev(false);
            currentAchieve ? (
                AsyncStorage.getItem("achiev").then((res)=>
                {
                    res ? (
                        storageAchieve = JSON.parse(res),
                        Check(),
                        AsyncStorage.setItem("achiev", JSON.stringify(currentAchieve))

                    ):(
                        AsyncStorage.setItem("achiev", JSON.stringify(currentAchieve)),
                        storageAchieve = currentAchieve as UserStatistic,
                        Check()
                    );
                })
            ):(null);
        })):(null);

    function Check () {
        for (let index = 0; index < allBadges.length; index++){

            if (allBadges[index].type === BadgeTypes.passengerRides) {
                (currentAchieve!.passangerJourneysAmount >= allBadges[index].points) ?
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
                (currentAchieve!.driverJourneysAmount >= allBadges[index].points) ?
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
                (currentAchieve!.totalKm >= allBadges[index].points) ?
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

        currentBadge[curent] ? (
            setShowModal(true)
        ):(null);
    }

    useEffect(() => {
        SignalRHubConnection.on("RecieveStats", (stat: UserStatistic) => {
            stat ? (
                currentAchieve = stat as UserStatistic,
                Check(),
                AsyncStorage.setItem("achiev", JSON.stringify(currentAchieve)),
                storageAchieve = currentAchieve as UserStatistic
            ):(null);
        });
    },[]);

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
