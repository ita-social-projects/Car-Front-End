interface AvatarLogoProps {
    user?: {
        name: string,
        surname: string,
        imageId?: string | null
    } | null,
    size?: number
}

export default AvatarLogoProps;
