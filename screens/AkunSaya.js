import * as React from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const AkunSaya = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.akunSaya, styles.iconLayout]}>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <Text style={[styles.profile, styles.logOutTypo, styles.profileTypo]}>
        Profile
      </Text>
      <Image
        style={styles.akunSayaChild}
        resizeMode="cover"
        source={require("../assets/group-42.png")}
      />
      <View
        style={[
          styles.telephoneParent,
          styles.parentLayout,
          styles.parentBorder,
        ]}
      >
        <Text style={[styles.telephone, styles.textTypo]}>Telephone</Text>
        <Text style={[styles.text, styles.textTypo]}>089366755638</Text>
      </View>
      <View
        style={[styles.eMailParent, styles.parentLayout, styles.parentBorder]}
      >
        <Text style={[styles.telephone, styles.textTypo]}>E-Mail</Text>
        <Text style={[styles.text, styles.textTypo]}>
          190103109@fikom.udb.ac.id
        </Text>
      </View>
      <View style={[styles.aboutParent, styles.parentLayout]}>
        <Text style={[styles.telephone, styles.textTypo]}>About</Text>
        <Text style={[styles.text, styles.textTypo]}>Tidak ada cerita</Text>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.logOut, styles.logOutTypo]}>LOG OUT</Text>
      </Pressable>
      <Text
        style={[
          styles.indriyasKukuhWijayanti,
          styles.logOutTypo,
          styles.profileTypo,
        ]}
      >
        Indriyas Kukuh Wijayanti
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  logOutTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  profileTypo: {
    color: Color.black,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  parentLayout: {
    height: 62,
    width: 312,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    position: "absolute",
    overflow: "hidden",
  },
  parentBorder: {
    left: 24,
    width: 312,
    borderBottomWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
  },
  textTypo: {
    height: 27,
    width: 290,
    left: 11,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 131,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    position: "absolute",
  },
  profile: {
    top: 25,
    left: 150,
    fontWeight: "500",
  },
  akunSayaChild: {
    top: 89,
    left: 130,
    width: 100,
    height: 100,
    position: "absolute",
  },
  telephone: {
    fontWeight: "700",
    top: 0,
  },
  text: {
    top: 31,
  },
  telephoneParent: {
    top: 265,
  },
  eMailParent: {
    top: 338,
  },
  aboutParent: {
    top: 411,
    left: 18,
  },
  groupChild: {
    left: 0,
    borderRadius: Border.br_md,
    top: 0,
  },
  logOut: {
    top: 11,
    left: 35,
    fontSize: FontSize.size_3xl,
    color: Color.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  vectorParent: {
    top: 695,
    left: 114,
  },
  indriyasKukuhWijayanti: {
    top: 217,
    left: 69,
    fontWeight: "700",
  },
  akunSaya: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default AkunSaya;
