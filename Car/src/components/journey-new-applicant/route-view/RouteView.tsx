import React from "react";
import JourneyPoint from "../../../../models/journey/JourneyPoint";
import Stop from "../../../../models/stop/Stop";
import { LatLng } from "react-native-maps";
import NotificationProps from "../../notifications/NotificationProps";
import User from "../../../../models/user/User";
import StopsView from "../../stops-view/StopsView";

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

const RouteView = (props: RouteViewProps) => {
    return (
        <>
            <StopsView
                journeyPoints={props.route.params.journeyPoints}
                stops={props.route.params.stops}
                currentStop={props.route.params.currentStop}
                cameraCoordinates={props.route.params.cameraCoordinates}
                user={props.route.params.user}
                useOnlyIntermediateStops={true}
            />
        </>
    );
};

export default RouteView;