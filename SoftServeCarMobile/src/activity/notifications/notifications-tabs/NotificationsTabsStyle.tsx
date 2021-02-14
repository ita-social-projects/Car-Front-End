import Font from "../../../data/fonts/Font";
import EStyleSheet from "react-native-extended-stylesheet";

const NotificationsTabsStyle = EStyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch"
    },

    headerTitleStyle: {
        fontFamily: Font.OpenSans.Bold,
        fontSize: "1.1rem",
        paddingTop: "0.3rem"
    }
});

export default NotificationsTabsStyle;
