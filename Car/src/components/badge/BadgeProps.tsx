import BadgeTypes from "./BadgeTypes";

interface BadgeProps{
    name: string
    type: BadgeTypes
    description: string
    points: number
    isReached: boolean,
    scale: number,
    pathLocked: any,
    pathUnlocked: any
}

export default BadgeProps;