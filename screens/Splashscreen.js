import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Splashscreen = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splashscreen}
      onPress={() => navigation.navigate("Login")}
    >
      <LinearGradient
        style={[styles.splashscreenChild, styles.rectangleIconPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.splashscreenChild, styles.rectangleIconPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.splashscreenChild, styles.rectangleIconPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <LinearGradient
        style={[styles.splashscreenChild, styles.rectangleIconPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 81, 112, 0)", "rgba(255, 81, 112, 0)"]}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <Text style={[styles.bagystore, styles.bagystoreClr]}>BAGYSTORE</Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Text style={[styles.version101, styles.bagystoreClr]}>Version 1.01</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleIconPosition: {
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bagystoreClr: {
    color: Color.white,
    position: "absolute",
  },
  splashscreenChild: {
    height: 640,
    backgroundColor: "transparent",
  },
  rectangleIcon: {
    height: 800,
  },
  bagystore: {
    top: 186,
    left: 71,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.oswald,
    textAlign: "center",
  },
  ellipseIcon: {
    top: 287,
    left: 66,
    width: 224,
    height: 226,
    position: "absolute",
  },
  version101: {
    top: 734,
    left: 161,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    width: 154,
    height: 15,
  },
  splashscreen: {
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
  },
});

export default Splashscreen;
