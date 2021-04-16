interface AddressInputButtonProps {
    directionType: string,
    text: string,
    iconName: string,
    onPress?: () => void,
    onIconPress?: () => void,
    disabled?: boolean,
    marginHorizontal?: number
}

export default AddressInputButtonProps;