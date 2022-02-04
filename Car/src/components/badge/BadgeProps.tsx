import BadgeTypes from "./BadgeTypes";

interface BadgeProps{
    name: string
    type: BadgeTypes
    description: string
    points: number
    isReached: boolean
}

export default BadgeProps;