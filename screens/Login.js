import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <LinearGradient
        style={[styles.loginChild, styles.loginChildPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.loginChild, styles.loginChildPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.loginChild, styles.loginChildPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.loginChild, styles.loginChildPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <Image
        style={[styles.rectangleIcon, styles.loginChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-101.png")}
      />
      <LinearGradient
        style={[
          styles.loginChild1,
          styles.loginChildLayout,
          styles.loginChildLayout1,
        ]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <Image
        style={[
          styles.loginChild2,
          styles.loginChildLayout,
          styles.loginChildLayout1,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Pressable
        style={[styles.rectanglePressable, styles.loginChildLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      />
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.username, styles.passwordTypo]}>Username</Text>
      <Text style={[styles.forgotPassword, styles.dontHaveAnTypo]}>
        Forgot Password?
      </Text>
      <Text style={[styles.dontHaveAn, styles.dontHaveAnTypo]}>
        Don’t have an account?Sign Up
      </Text>
      <Text style={[styles.bagystore, styles.login1FlexBox]}>BAGYSTORE</Text>
      <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginChildPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginChildLayout: {
    height: 46,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  loginChildLayout1: {
    width: 253,
    left: 60,
    height: 46,
    borderRadius: Border.br_lg,
  },
  passwordTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.gray_600,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dontHaveAnTypo: {
    fontSize: FontSize.size_sm,
    color: Color.white,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  login1FlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  loginChild: {
    height: 640,
    backgroundColor: "transparent",
  },
  rectangleIcon: {
    height: 800,
  },
  loginChild1: {
    top: 323,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  loginChild2: {
    top: 395,
  },
  rectanglePressable: {
    top: 490,
    left: 128,
    backgroundColor: Color.white,
    width: 118,
    height: 46,
    borderRadius: Border.br_lg,
  },
  password: {
    top: 409,
    left: 88,
  },
  username: {
    top: 337,
    left: 89,
  },
  forgotPassword: {
    top: 446,
    left: 226,
    color: Color.white,
  },
  dontHaveAn: {
    top: 558,
    left: 123,
    color: Color.white,
  },
  bagystore: {
    top: 186,
    left: 71,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.oswald,
    color: Color.white,
  },
  login1: {
    top: 501,
    left: 162,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    color: Color.orange,
    fontFamily: FontFamily.roboto,
    textAlign: "center",
  },
  login: {
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Login;
