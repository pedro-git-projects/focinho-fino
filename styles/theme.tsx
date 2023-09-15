export const globalStyles = {
  light: {
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
      padding: 20,
    },
    text: {
      // fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: "#333",
    },
    loginScreen: {
      input: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        width: "100%",
        marginBottom: 20,
      },
      loginButton: {
        backgroundColor: "#007BFF", // You can use global colors here
        padding: 15,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
      },
      loginButtonText: {
        color: "#fff",
        fontSize: 18,
      },
    },
    // Add more light theme styles here
  },
  dark: {
    container: {
      flex: 1,
      backgroundColor: "black",
      padding: 20,
    },
    text: {
      // fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      color: "white",
    },
    loginScreen: {
      input: {
        backgroundColor: "#333", // Dark mode input background color
        padding: 10,
        borderRadius: 5,
        width: "100%",
        marginBottom: 20,
        color: "white", // Dark mode text color
      },
      loginButton: {
        backgroundColor: "#007BFF", // You can use global colors here
        padding: 15,
        borderRadius: 5,
        width: "100%",
        alignItems: "center",
      },
      loginButtonText: {
        color: "#fff",
        fontSize: 18,
      },
    },
    // Add more dark theme styles here
  },
};
