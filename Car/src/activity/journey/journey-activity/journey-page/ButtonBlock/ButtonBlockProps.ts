import Journey from "../../../../../../models/journey/Journey";

interface ButtonBlockProps {
    isDriver: boolean,
    isPassenger: boolean,
    isRequested: boolean,
    journey: Journey
}

export default ButtonBlockProps;