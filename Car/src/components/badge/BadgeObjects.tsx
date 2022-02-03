import BadgeProps from "./BadgeProps";

interface BadgesArray {
    [index: number] : BadgeProps
}

var Badges: BadgesArray = [
    {
        name: "beginner",
        description: "Yay, you've rided 1 ride!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_1",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_1",
        points: 1,
        isAchived: false
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_5",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_5",
        points: 5,
        isAchived: false
    },
    {
        name: "turist",
        description: "Yay, you've rided 10 rides!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_10",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_10",
        points: 10,
        isAchived: false
    },
    {
        name: "Ride Buddy",
        description: "Yay, you've rided 20 rides!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_20",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_20",
        points: 20,
        isAchived: false
    },
    {
        name: "frog traveler",
        description: "Yay, you've rided 50 rides!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_50",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_50",
        points: 50,
        isAchived: false
    },
    {
        name: "travel guru",
        description: "Yay, you've rided 100 rides!",
        pathLocked: "../../../assets/Badges/Locked/PassRides_100",
        pathUnlocked: "../../../assets/Badges/Unlocked/PassRides_100",
        points: 100,
        isAchived: false
    },
    {
        name: "beginner",
        description: "Yay, you've rided 1 ride!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_1",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_1",
        points: 1,
        isAchived: false
    },
    {
        name: "freelancer",
        description: "Yay, you've rided 5 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_5",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_5",
        points: 5,
        isAchived: false
    },
    {
        name: "ridoholic",
        description: "Yay, you've rided 10 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_10",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_10",
        points: 10,
        isAchived: false
    },
    {
        name: "sachem",
        description: "Yay, you've rided 20 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_20",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_20",
        points: 20,
        isAchived: false
    },
    {
        name: "super driver",
        description: "Yay, you've rided 50 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_50",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_50",
        points: 50,
        isAchived: false
    },
    {
        name: "jet driver",
        description: "Yay, you've rided 100 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_100",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_100",
        points: 100,
        isAchived: false
    },
    {
        name: "SpaceX driver",
        description: "Yay, you've rided 200 rides!",
        pathLocked: "../../../assets/Badges/Locked/DriverRides_200",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverRides_200",
        points: 200,
        isAchived: false
    },
    {
        name: "elusive Joe",
        description: "Yay, you've rided 10 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_10",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_10",
        points: 10,
        isAchived: false
    },
    {
        name: "sprinter",
        description: "Yay, you've rided 50 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_50",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_50",
        points: 50,
        isAchived: false
    },
    {
        name: "marathon driver",
        description: "Yay, you've rided 100 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_100",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_100",
        points: 100,
        isAchived: false
    },
    {
        name: "scorcher",
        description: "Yay, you've rided 200 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_200",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_200",
        points: 200,
        isAchived: false
    },
    {
        name: "007",
        description: "Yay, you've rided 300 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_300",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_300",
        points: 300,
        isAchived: false
    },
    {
        name: "Santa",
        description:"Yay, you've rided 500 km!",
        pathLocked: "../../../assets/Badges/Locked/DriverKm_500",
        pathUnlocked: "../../../assets/Badges/Unlocked/DriverKm_500",
        points: 500,
        isAchived: false
    }
];

export default Badges;