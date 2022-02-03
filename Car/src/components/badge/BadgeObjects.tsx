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
        isReached: false
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        type: BadgeTypes.passangerRides,
        points: 5,
        isReached: false
    },
    {
        name: "turist",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.passangerRides,
        points: 10,
        isReached: false
    },
    {
        name: "Ride Buddy",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.passangerRides,
        points: 20,
        isReached: false
    },
    {
        name: "frog traveler",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.passangerRides,
        points: 50,
        isReached: false
    },
    {
        name: "travel guru",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.passangerRides,
        points: 100,
        isReached: false
    },
    {
        name: "beginner",
        description: "Yay, you've rided 1 ride!",
        type: BadgeTypes.DriverRides,
        points: 1,
        isReached: false
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        type: BadgeTypes.DriverRides,
        points: 5,
        isReached: false
    },
    {
        name: "ridoholic",
        description: "Yay, you've rided 10 rides!",
        type: BadgeTypes.DriverRides,
        points: 10,
        isReached: false
    },
    {
        name: "sachem",
        description: "Yay, you've rided 20 rides!",
        type: BadgeTypes.DriverRides,
        points: 20,
        isReached: false
    },
    {
        name: "super driver",
        description: "Yay, you've rided 50 rides!",
        type: BadgeTypes.DriverRides,
        points: 50,
        isReached: false
    },
    {
        name: "jet driver",
        description: "Yay, you've rided 100 rides!",
        type: BadgeTypes.DriverRides,
        points: 100,
        isReached: false
    },
    {
        name: "SpaceX driver",
        description: "Yay, you've rided 200 rides!",
        type: BadgeTypes.DriverRides,
        points: 200,
        isReached: false
    },
    {
        name: "elusive Joe",
        description: "Yay, you've rided 10 km!",
        type: BadgeTypes.DriverKm,
        points: 10,
        isReached: false
    },
    {
        name: "sprinter",
        description: "Yay, you've rided 50 km!",
        type: BadgeTypes.DriverKm,
        points: 50,
        isReached: false
    },
    {
        name: "marathon driver",
        description: "Yay, you've rided 100 km!",
        type: BadgeTypes.DriverKm,
        points: 100,
        isReached: false
    },
    {
        name: "scorcher",
        description: "Yay, you've rided 200 km!",
        type: BadgeTypes.DriverKm,
        points: 200,
        isReached: false
    },
    {
        name: "007",
        description: "Yay, you've rided 300 km!",
        type: BadgeTypes.DriverKm,
        points: 300,
        isReached: false
    },
    {
        name: "Santa",
        description:"Yay, you've rided 500 km!",
        type: BadgeTypes.DriverKm,
        points: 500,
        isReached: false
    }
];

export default Badges;