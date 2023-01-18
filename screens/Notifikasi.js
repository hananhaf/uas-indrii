import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Margin } from "../GlobalStyles";

const Notifikasi = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.notifikasi, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Pressable
          style={[styles.note, styles.noteLayout]}
          onPress={() => navigation.navigate("PesananDikirim")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/8note1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home11, styles.noteLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/2home111.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo, styles.homeTypo1]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homeTypo1]}>
          Keranjang
        </Text>
        <Text style={[styles.chat, styles.homeTypo, styles.homeTypo1]}>
          Chat
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag61.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat20, styles.chat20Layout]}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/47chat201.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.arrowLeft1, styles.chat20Layout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <Text
        style={[
          styles.notifikasi1,
          styles.notifikasiClr,
          styles.notifikasiTypo,
        ]}
      >
        Notifikasi
      </Text>
      <View style={styles.belumAdaNotifikasiParent}>
        <Text
          style={[
            styles.belumAdaNotifikasi,
            styles.notifikasiClr,
            styles.notifikasiTypo,
          ]}
        >
          Belum Ada Notifikasi
        </Text>
        <Text
          style={[styles.semuaNotifikasiYangContainer, styles.notifikasiClr]}
        >
          <Text style={styles.semuaNotifikasiYang}>
            Semua notifikasi yang kami kirim akan muncul di sini
          </Text>
          <Text style={styles.supayaAndaBisa}>
            supaya anda bisa mengeceknya
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  groupChildLayout: {
    height: 68,
    width: 360,
    left: 0,
    position: "absolute",
  },
  noteLayout: {
    height: 27,
    position: "absolute",
  },
  homeTypo: {
    height: 21,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  homeTypo1: {
    top: 39,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  chat20Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  notifikasiClr: {
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  notifikasiTypo: {
    fontSize: FontSize.size_5xl,
    color: Color.black,
    textAlign: "left",
    fontWeight: "500",
  },
  groupChild: {
    top: 0,
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderStyle: "solid",
    borderColor: "#e4823b",
    borderTopWidth: 1,
  },
  icon: {
    height: "100%",
  },
  note: {
    left: 124,
    width: 27,
    top: 7,
  },
  home11: {
    left: 35,
    width: 29,
    top: 7,
  },
  home: {
    left: 32,
    width: 35,
  },
  pesanan: {
    top: 40,
    left: 111,
    width: 53,
  },
  keranjang: {
    left: 195,
    width: 61,
  },
  chat: {
    width: 40,
    left: 297,
  },
  bag6: {
    left: 211,
    top: 8,
    width: 26,
  },
  chat20: {
    left: 297,
    top: 7,
  },
  rectangleParent: {
    top: 732,
  },
  arrowLeft1: {
    left: 20,
    top: 20,
  },
  notifikasi1: {
    top: 23,
    left: 138,
  },
  belumAdaNotifikasi: {
    top: 131,
    left: 64,
  },
  semuaNotifikasiYang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  supayaAndaBisa: {
    margin: Margin.m_md,
  },
  semuaNotifikasiYangContainer: {
    top: 178,
    left: 13,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    width: 294,
  },
  belumAdaNotifikasiParent: {
    top: 213,
    left: 22,
    width: 316,
    height: 356,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  notifikasi: {
    flex: 1,
    height: 800,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Notifikasi;
