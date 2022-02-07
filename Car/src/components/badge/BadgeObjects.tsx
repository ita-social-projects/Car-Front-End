import BadgeProps from "./BadgeProps";
import BadgeTypes from "./BadgeTypes";

interface BadgesArray {
    [index: number] : BadgeProps
}

var Badges: BadgesArray = [
    {
        name: "beginner",
        type: BadgeTypes.passangerRides,
        description: "Yay, you've rided 1 ride!",
        points: 1,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/beginner_0_1.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/beginner_0_1.png")
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        type: BadgeTypes.passangerRides,
        points: 5,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/freelancer_0_5.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/freelancer_0_5.png")
    },
    {
        name: "turist",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.passangerRides,
        points: 10,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/turist_0_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/turist_0_10.png")
    },
    {
        name: "Ride Buddy",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.passangerRides,
        points: 20,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/RideBuddy_0_20.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/RideBuddy_0_20.png")
    },
    {
        name: "frog traveler",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.passangerRides,
        points: 50,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/frog traveler_0_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/frog traveler_0_50.png")
    },
    {
        name: "travel guru",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.passangerRides,
        points: 100,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/travel guru_0_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/travel guru_0_100.png")
    },
    {
        name: "beginner",
        description: "Yay, you've rided 1 ride!",
        type: BadgeTypes.DriverRides,
        points: 1,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/beginner_1_1.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/beginner_1_1.png")
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        type: BadgeTypes.DriverRides,
        points: 5,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/freelancer_1_5.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/freelancer_1_5.png")
    },
    {
        name: "ridoholic",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.DriverRides,
        points: 10,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/ridoholic_1_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/ridoholic_1_10.png")
    },
    {
        name: "sachem",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.DriverRides,
        points: 20,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/sachem_1_20.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/sachem_1_20.png")
    },
    {
        name: "super driver",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.DriverRides,
        points: 50,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/superdriver_1_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/superdriver_1_50.png")
    },
    {
        name: "jet driver",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.DriverRides,
        points: 100,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/jetdriver_1_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/jetdriver_1_100.png")
    },
    {
        name: "SpaceX driver",
        description: "Yay, you've rided 200 rides!",
        type: BadgeTypes.DriverRides,
        points: 200,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/SpaceXdriver_1_200.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/SpaceXdriver_1_200.png")
    },
    {
        name: "elusive Joe",
        description: "Yay, you've rided 10 km!",
        type: BadgeTypes.DriverKm,
        points: 10,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/elusiveJoe_2_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/elusiveJoe_2_10.png")
    },
    {
        name: "sprinter",
        description: "Yay, you've rided 50 km!",
        type: BadgeTypes.DriverKm,
        points: 50,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/sprinter_2_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/sprinter_2_50.png")
    },
    {
        name: "marathon driver",
        description: "Yay, you've rided 100 km!",
        type: BadgeTypes.DriverKm,
        points: 100,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/marathondriver_2_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/marathondriver_2_100.png")
    },
    {
        name: "scorcher",
        description: "Yay, you've rided 200 km!",
        type: BadgeTypes.DriverKm,
        points: 200,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/scorcher_2_200.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/scorcher_2_200.png")
    },
    {
        name: "007",
        description: "Yay, you've rided 300 km!",
        type: BadgeTypes.DriverKm,
        points: 300,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/007_2_300.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/007_2_300.png")
    },
    {
        name: "Santa",
        description:"Yay, you've rided 500 km!",
        type: BadgeTypes.DriverKm,
        points: 500,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/Santa_2_500.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/Santa_2_500.png")
    }
];

export default Badges;