import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },

    card: {
        flexDirection: 'row',
    },

    imageContainer: {
        height: 70,
        width: 90,

    },

    image: {
        flex: 1,
    },

    textContainer: {
        flex: 1,
        paddingLeft: 5,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    capital: {
        opacity: 0.5,
    }
})

export default style