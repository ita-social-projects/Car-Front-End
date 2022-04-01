import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import UserStatisticService from "../../../api-service/user-service/UserStatisticService";
import UserStatistic from "../../../models/user/UserStatistic";
import AuthContext from "../auth/AuthContext";
import ModalBadge from "../badge-popup/ModalBadge";
import { View } from "react-native";
import CheckAchieveContext from "./CheckAchieveContext";
import BadgeProps from "../badge/BadgeProps";
import allBadges from "../badge/BadgeObjects";
import BadgeTypes from "../badge/BadgeTypes";
import SignalRHubConnection from "../../../api-service/SignalRHubConnection";

const CheckAchieve = ({ children }) => {
    const INITIAL_FIRST_BADGE: number = 0;

    const { user } = useContext(AuthContext);
    const [allowCheckAchiev, setAllowCheckAchiev] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [badgesArray] = useState(Array<BadgeProps>());
    const [currentBadge, setCurrentBadge] = useState(allBadges[INITIAL_FIRST_BADGE]);

    const [storageAchieve, setStorageAchieve] = useState<UserStatistic>(null);
    const [currentAchieve, setCurrentAchieve] = useState<UserStatistic>(null);

    if (user && allowCheckAchiev) {
        UserStatisticService.getUserStatisticById(user!.id).then((result) => {
            setCurrentAchieve(result.data);
            setAllowCheckAchiev(false);
            AsyncStorage.getItem("achiev").then((res) => {
                if (res) {
                    setStorageAchieve(JSON.parse(res));
                } else {
                    setStorageAchieve(currentAchieve);
                }
            });
        });
    }

    useEffect(() => {
        if (currentAchieve && storageAchieve) {
            badgesArray.length = 0;
            for (let badge of allBadges) {
                if (badge.type === BadgeTypes.passengerRides) {
                    if (currentAchieve.passangerJourneysAmount >= badge.points) {
                        badge.isReached = true;
                        if (storageAchieve.passangerJourneysAmount < badge.points) {
                            setCurrentBadge(badge);
                            setShowModal(true);
                        }
                    }
                }
                if (badge.type === BadgeTypes.driverRides) {
                    if (currentAchieve.driverJourneysAmount >= badge.points) {
                        badge.isReached = true;
                        if (storageAchieve!.driverJourneysAmount < badge.points) {
                            setCurrentBadge(badge);
                            setShowModal(true);
                        }
                    }
                }
                if (badge.type === BadgeTypes.driverDistance) {
                    if (currentAchieve.totalKm >= badge.points) {
                        badge.isReached = true;
                        if (storageAchieve.totalKm < badge.points) {
                            setCurrentBadge(badge);
                            setShowModal(true);
                        }
                    }
                }
                badgesArray.push(badge);
            }
            AsyncStorage.setItem("achiev", JSON.stringify(currentAchieve));
        }
    }, [storageAchieve, currentAchieve]);

    useEffect(() => {
        if (user) {
            SignalRHubConnection.then((connection) => {
                connection
                    .send("EnterToGroup", "statistic" + user?.id.toString())
                    .catch(() => console.log("no connection"));

                connection.on("RecieveStats", (stat) => {
                    if (stat) {
                        setCurrentAchieve(stat);
                        setStorageAchieve(currentAchieve);
                    }
                });
            });
        }
    }, [storageAchieve]);

    const closePopup = () => {
        setShowModal(false);
        setStorageAchieve(currentAchieve);
    };

    return (
        <View style={{ flex: 1 }}>
            <CheckAchieveContext.Provider value={{ badges: badgesArray }}>
                {children}
                <ModalBadge
                    visible={showModal}
                    image={currentBadge.pathUnlocked}
                    closeFunc={() => closePopup()}
                />
            </CheckAchieveContext.Provider>
        </View>
    );
};

export default CheckAchieve;
