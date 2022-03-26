import BadgeTypes from "./BadgeTypes";

interface BadgeProps {
    name: string,
    type: BadgeTypes,
    description: string
    points: number,
    isReached: boolean,
    scale: number,
    pathUnlocked: any,
    pathLocked: any
}

export default BadgeProps;