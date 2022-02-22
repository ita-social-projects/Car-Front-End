import BadgeTypes from "./BadgeTypes";

var allBadges = [
    {
        name: "beginner",
        type: BadgeTypes.passengerRides,
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
        type: BadgeTypes.passengerRides,
        points: 5,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/freelancer_0_5.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/freelancer_0_5.png")
    },
    {
        name: "turist",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.passengerRides,
        points: 10,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/turist_0_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/turist_0_10.png")
    },
    {
        name: "ride buddy",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.passengerRides,
        points: 20,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/ride_buddy_0_20.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/ride_buddy_0_20.png")
    },
    {
        name: "frog traveler",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.passengerRides,
        points: 50,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/frog_traveler_0_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/frog_traveler_0_50.png")
    },
    {
        name: "travel guru",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.passengerRides,
        points: 100,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/travel_guru_0_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/travel_guru_0_100.png")
    },
    {
        name: "beginner",
        description: "Yay, you've rided 1 ride!",
        type: BadgeTypes.driverRides,
        points: 1,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/beginner_1_1.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/beginner_1_1.png")
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        type: BadgeTypes.driverRides,
        points: 5,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/freelancer_1_5.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/freelancer_1_5.png")
    },
    {
        name: "ridoholic",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.driverRides,
        points: 10,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/ridoholic_1_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/ridoholic_1_10.png")
    },
    {
        name: "sachem",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.driverRides,
        points: 20,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/sachem_1_20.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/sachem_1_20.png")
    },
    {
        name: "super driver",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.driverRides,
        points: 50,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/super_driver_1_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/super_driver_1_50.png")
    },
    {
        name: "jet driver",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.driverRides,
        points: 100,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/jet_driver_1_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/jet_driver_1_100.png")
    },
    {
        name: "SpaceX driver",
        description: "Yay, you've rided 200 rides!",
        type: BadgeTypes.driverRides,
        points: 200,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/spacex_driver_1_200.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/spacex_driver_1_200.png")
    },
    {
        name: "elusive Joe",
        description: "Yay, you've rided 10 km!",
        type: BadgeTypes.driverDistance,
        points: 10,
        isReached: true,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/elusive_joe_2_10.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/elusive_joe_2_10.png")
    },
    {
        name: "sprinter",
        description: "Yay, you've rided 50 km!",
        type: BadgeTypes.driverDistance,
        points: 50,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/sprinter_2_50.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/sprinter_2_50.png")
    },
    {
        name: "marathon driver",
        description: "Yay, you've rided 100 km!",
        type: BadgeTypes.driverDistance,
        points: 100,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/marathon_driver_2_100.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/marathon_driver_2_100.png")
    },
    {
        name: "scorcher",
        description: "Yay, you've rided 200 km!",
        type: BadgeTypes.driverDistance,
        points: 200,
        isReached: false,
        scale: 0.5,
        pathLocked: require("../../../assets/Badges/Locked/scorcher_2_200.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/scorcher_2_200.png")
    },
    {
        name: "007",
        description: "Yay, you've rided 300 km!",
        type: BadgeTypes.driverDistance,
        points: 300,
        isReached: false,
        scale: 0.9,
        pathLocked: require("../../../assets/Badges/Locked/007_2_300.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/007_2_300.png")
    },
    {
        name: "santa",
        description: "Yay, you've rided 300 km!",
        type: BadgeTypes.driverDistance,
        points: 500,
        isReached: false,
        scale: 1,
        pathLocked: require("../../../assets/Badges/Locked/Santa_2_500.png"),
        pathUnlocked: require("../../../assets/Badges/Unlocked/Santa_2_500.png")
    }
];

export default allBadges;
