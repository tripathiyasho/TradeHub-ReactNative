import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function LandingPage() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logocantainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text>Sell What You Don't Need 💩</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.RegisterButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocantainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  RegisterButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
export default LandingPage;
