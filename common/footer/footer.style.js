import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },

    number: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20
    }
})

export default style