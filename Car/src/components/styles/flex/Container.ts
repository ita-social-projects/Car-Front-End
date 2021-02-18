import EStyleSheet from "react-native-extended-stylesheet";

const Container = EStyleSheet.create({
    container: {
        paddingLeft: "1.2rem",
        paddingRight: "1.2rem",
        elevation: 10
    },
    containerFluid: {
        paddingLeft: 0,
        paddingRight: 0,
        elevation: 10
    }
});

export default Container;
