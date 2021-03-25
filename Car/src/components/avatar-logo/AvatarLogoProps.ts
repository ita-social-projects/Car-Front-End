interface AvatarLogoProps {
    user?: {
        name: string,
        surname: string,
        imageId?: string
    } | null,
    size?: number
}

export default AvatarLogoProps;
