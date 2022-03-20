import React from "react";
import { LatLng } from "react-native-maps";
import JourneyPoint from "../../../models/journey/JourneyPoint";
import Stop from "../../../models/stop/Stop";
import User from "../../../models/user/User";
import NotificationProps from "../notifications/NotificationProps";
import StopsView from "../stops-view/StopsView";

interface RouteViewProps {
    route: {
        params: {
            journeyPoints: JourneyPoint[],
            stops: Stop[],
            currentStop: number,
            cameraCoordinates: LatLng,
            notification: NotificationProps,
            withoutAccept?: boolean,
            user: User,
        }
    }
}

const StopView = (props: RouteViewProps) => {
    console.log(props.route.params.stops);

    return (
        <>
            <StopsView
                journeyPoints={props.route.params.journeyPoints}
                stops={props.route.params.stops}
                currentStop={props.route.params.currentStop}
                cameraCoordinates={props.route.params.cameraCoordinates}
                user={props.route.params.user}
                useOnlyIntermediateStops={false}/>
        </>
    );
};

export default StopView;