import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    card: {
        marginBottom: 7,
        paddingBottom: 7,
        borderBottomWidth: 1 / 2
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
    },
    listView: {
        flexDirection: 'row',
        marginBottom: 5
    },
    listItem: {
        fontSize: 16,
        lineHeight: 20
    },
    bullet: {
        marginRight: 5,
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 14
    },
    link: {
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        color: "blue",
        fontSize: 16
    },
    icon: {
        fontSize: 25,
        marginRight: 5
    }
})

export default style