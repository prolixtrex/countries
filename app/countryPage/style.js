import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    header: {
        height: 50,
        backgroundColor: '#05D274',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 7,
        paddingRight: 7
    },

    headerBtn: {
        height: 40,
        width: 80,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },

    nav: {
        fontSize: 35,
        color: 'black',
    },

    image: {
        marginBottom: 10,
        rowGap: 5
    },

    flagBox: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 5
    },

    flag: {
        height: 200,

    },

    coatOfArm: {
        height: 200,
        width: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },

    country: {
        rowGap: 10
    },

    card: {
        borderWidth: 1,
        borderRadius: 7,
    },

    cell: {
        flexDirection: 'row',
        minHeight: 40,
        justifyContent: 'space-between',
    },

    subtitle: {
        fontWeight: 'bold',
        borderRadius: 7,
        fontSize: 25,
        paddingLeft: 5
    },

    text: {
        fontSize: 25,
        paddingRight: 5,
        paddingLeft: 5,
        textAlign: 'right',
        flex: 1
    },

    borders: {
        flexDirection: 'row',
        columnGap: 5,
        flexWrap: 'wrap',
        padding: 5
    },

    borderTitle: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5,
    },

    borderBtn: {
        fontSize: 25,
        backgroundColor: '#05D274',
        borderRadius: 5,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },

    borderName: {
        fontSize: 25
    },

    divider: {
        borderBottomWidth: 1 / 2
    }
})

export default styles