import * as React from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PesananDikirim = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pesananDikirim, styles.iconLayout]}>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.groupChildPosition,
            styles.groupChildLayout,
          ]}
        />
        <Image
          style={[styles.noteIcon, styles.bag6Layout]}
          resizeMode="cover"
          source={require("../assets/8note1.png")}
        />
        <Pressable
          style={[styles.home11, styles.bag6Layout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/2home111.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homePosition]}>
          Keranjang
        </Text>
        <Text style={[styles.chat, styles.homeTypo, styles.homePosition]}>
          Chat
        </Text>
        <Pressable
          style={[styles.bag6, styles.bag6Layout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag65.png")}
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
      <View style={styles.honayoofficialParent}>
        <Text style={styles.honayoofficial}>Honayoofficial</Text>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-905.png")}
        />
        <Text
          style={styles.tasBahuGabine}
        >{`Tas Bahu Gabine Tweed Curved `}</Text>
        <Text style={[styles.navy, styles.x1Typo, styles.x1Position]}>
          Navy
        </Text>
        <Text style={[styles.x1, styles.x1Typo, styles.x1Position]}>x1</Text>
        <Text style={[styles.totalPesanan, styles.x1Typo]}>
          Total Pesanan : Rp. 999.000,00
        </Text>
        <Text style={[styles.rp99900000, styles.x1Typo]}>Rp. 999.000,00</Text>
        <Text style={[styles.nilai, styles.x1Typo]}>Nilai</Text>
      </View>
      <View style={[styles.pesananDikirimInner, styles.groupChildPosition]}>
        <View style={styles.arrowLeft1Parent}>
          <Pressable
            style={[styles.chat20Layout, styles.groupChildPosition]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/36arrowleft1.png")}
            />
          </Pressable>
          <Text style={[styles.pesanan1, styles.dikirimTypo]}>Pesanan</Text>
          <Text
            style={[
              styles.dikirim,
              styles.dikirimPosition,
              styles.dikirimTypo,
              styles.dikirimTypo1,
            ]}
          >
            Dikirim
          </Text>
          <Pressable
            style={[styles.riwayat, styles.dikirimPosition]}
            onPress={() => navigation.navigate("PesananRiwayat")}
          >
            <Text
              style={[styles.riwayat1, styles.dikirimTypo, styles.dikirimTypo1]}
            >
              Riwayat
            </Text>
          </Pressable>
          <Image
            style={styles.groupItem}
            resizeMode="cover"
            source={require("../assets/line-4.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 68,
    width: 360,
    position: "absolute",
  },
  groupChildPosition: {
    top: 0,
    left: 0,
  },
  bag6Layout: {
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
  homePosition: {
    top: 39,
    height: 21,
  },
  chat20Layout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  x1Typo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    position: "absolute",
  },
  x1Position: {
    top: 69,
    fontSize: FontSize.size_base,
    color: Color.black,
  },
  dikirimTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    color: Color.black,
  },
  dikirimPosition: {
    top: 59,
    position: "absolute",
  },
  dikirimTypo1: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderStyle: "solid",
    borderColor: "#e4823b",
    borderTopWidth: 1,
  },
  noteIcon: {
    left: 124,
    width: 27,
    top: 7,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    left: 0,
    height: 68,
  },
  honayoofficial: {
    top: 12,
    width: 81,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    left: 14,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  frameChild: {
    top: 33,
    borderRadius: Border.br_md,
    width: 60,
    height: 60,
    left: 14,
    position: "absolute",
  },
  tasBahuGabine: {
    top: 47,
    left: 101,
    width: 149,
    fontFamily: FontFamily.openSansHebrewCondensed,
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  navy: {
    left: 103,
  },
  x1: {
    left: 287,
  },
  totalPesanan: {
    top: 100,
    left: 179,
    color: Color.black,
  },
  rp99900000: {
    top: 86,
    left: 239,
    color: Color.black,
  },
  nilai: {
    top: 125,
    left: 254,
    color: Color.white,
    fontSize: FontSize.size_base,
  },
  honayoofficialParent: {
    top: 112,
    left: 23,
    width: 320,
    height: 143,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  pesanan1: {
    top: 5,
    left: 121,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    position: "absolute",
  },
  dikirim: {
    left: 26,
    color: Color.black,
  },
  riwayat1: {
    color: Color.black,
  },
  riwayat: {
    left: 114,
  },
  groupItem: {
    top: 77,
    left: 20,
    width: 54,
    height: 1,
    position: "absolute",
  },
  arrowLeft1Parent: {
    top: 15,
    width: 199,
    height: 78,
    left: 26,
    position: "absolute",
  },
  pesananDikirimInner: {
    height: 107,
    width: 360,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  pesananDikirim: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default PesananDikirim;
