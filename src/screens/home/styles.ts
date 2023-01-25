import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#133337',
        padding: 24
    },
    eventName: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        color: "white",
        padding: 16,
        fontSize: 16,
        marginRight: 7
    },
    buttonText: {
        color: 'white',
        fontSize: 25
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31CF67",
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
        color: "#FFF",
        fontSize: 14,
        textAlign: 'center'
    }
  })