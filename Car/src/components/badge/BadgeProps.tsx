import BadgeTypes from "./BadgeTypes";

interface BadgeProps {
    name: string,
    description: string
    points: number,
    scale: number,
    isReached: boolean,
    pathUnlocked: any,
    pathLocked: any
    type: BadgeTypes
}

export default BadgeProps;