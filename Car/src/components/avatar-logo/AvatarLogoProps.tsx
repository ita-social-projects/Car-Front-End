interface AvatarLogoProps {
    user?: {
        name: string,
        surname: string,
        imageId?: string | null
    } | null,
    size?: number,
    marginTop?: number,
    marginLeft?: number
}

export default AvatarLogoProps;
