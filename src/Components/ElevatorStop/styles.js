const styles = {
    root: {
        display: "flex",
        height: "160px",
    },

    button: {
        margin: "20px 0",
        borderRadius: "20%",
        padding: "5px 0 5px 0"
    },

    iconContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "120px",
        margin: "20px 0 20px 0",
    },

    icon: {
        width: "30px",
        height: "30px",
    },

    stopBox: {
        width: "120px",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        borderRadius: "20%",
    },

    cardContent: {
        height: "120px",
        width: "120px",
        display: "flex",
        alignItems: "center",
    },

    title: {
        marginLeft: "40px",
        width: "40px",
        color: "#ffffff",
    },

    normalIcon: {
        color: "#4d4d68",
    },

    activeIcon: {
        color: "#13b38b",
    },

    normalStop: {
        backgroundColor: "#4d4d68",
    },

    currentStop: {
        backgroundColor: "#13b38b",
    },

    nextStopIconContainer: {
        display: "flex",
        flexDirection: "column",
        width: "40px",
        alignItems: "center",
    },

    nextStopTitle: {
        fontSize: "10px"
    },

    nextStopCircle: {
        height: "14px",
        width: "14px",
        margin: "2px 5px 2px 5px",
        backgroundColor: "#fffa7a",
        borderRadius: "50%",
        display: "inline-block",
    }
}

export default styles
