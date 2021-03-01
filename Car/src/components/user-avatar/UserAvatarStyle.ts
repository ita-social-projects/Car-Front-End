import EStyleSheet from "react-native-extended-stylesheet";

const UserAvatarStyle = (backgroundColor: string) =>
    EStyleSheet.create({
        circle: {
            backgroundColor: backgroundColor,
            borderRadius: 90,
            height: 57,
            width: 57,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5
        }
    });

export default UserAvatarStyle;
