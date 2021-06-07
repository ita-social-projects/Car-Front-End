import Journey from "../../../../../../models/journey/Journey";
import Stop from "../../../../../../models/stop/Stop";

interface ButtonBlockProps {
    isDriver: boolean,
    isPassenger: boolean,
    isRequested: boolean,
    journey: Journey,
    applicantStops?: Stop[],
}

export default ButtonBlockProps;
