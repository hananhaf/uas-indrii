import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Keranjang = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.keranjang, styles.iconLayout]}>
      <Pressable
        style={[styles.boxParent, styles.boxLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.box, styles.boxPosition, styles.boxLayout]} />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
      </Pressable>
      <Text style={styles.keranjang1}>Keranjang</Text>
      <View style={styles.rectangleParent}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-901.png")}
        />
        <Text style={[styles.rp99900000, styles.ukuranMTypo]}>
          Rp. 999.000,00
        </Text>
        <Text style={[styles.ukuranMPosition, styles.ukuranMTypo]}>
          Ukuran : M Jumlah :
        </Text>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <Text style={[styles.text, styles.textTypo1]}>-</Text>
          <Text style={[styles.text1, styles.textTypo1]}>+</Text>
          <Text style={[styles.text2, styles.textTypo]}>1</Text>
        </View>
        <Image
          style={[styles.archiveIcon, styles.ukuranMPosition]}
          resizeMode="cover"
          source={require("../assets/60archive.png")}
        />
        <Image
          style={styles.tickSquareIcon}
          resizeMode="cover"
          source={require("../assets/87ticksquare.png")}
        />
        <Text style={[styles.tasBahuGabine, styles.tasTypo]}>
          Tas Bahu Gabine Tweed Curved - Navy
        </Text>
      </View>
      <View style={styles.totalPembayaranParent}>
        <Text
          style={[
            styles.totalPembayaran,
            styles.pembayaranTypo,
            styles.rp999000001Typo,
          ]}
        >
          Total Pembayaran :
        </Text>
        <Text
          style={[
            styles.rp999000001,
            styles.pembayaranTypo,
            styles.rp999000001Typo,
          ]}
        >
          Rp. 999.000,00
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleBorder]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-902.png")}
        />
        <Text style={[styles.rp99900000, styles.ukuranMTypo]}>
          Rp. 999.000,00
        </Text>
        <Text style={styles.ukuranMTypo}>Ukuran : M Jumlah :</Text>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.rectangleView, styles.groupInnerLayout]} />
          <Text style={[styles.text3, styles.textTypo]}>-</Text>
          <Text style={[styles.text4, styles.textTypo]}>+</Text>
          <Text style={styles.text5}>1</Text>
        </View>
        <Image
          style={[styles.archiveIcon, styles.ukuranMPosition]}
          resizeMode="cover"
          source={require("../assets/60archive.png")}
        />
        <Text style={[styles.tasBahuQoa, styles.tasTypo]}>
          Tas Bahu Qoa square Push - Lock -Green
        </Text>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleBorder]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-902.png")}
        />
        <Text style={[styles.rp99900000, styles.ukuranMTypo]}>
          Rp. 999.000,00
        </Text>
        <Text style={styles.ukuranMTypo}>Ukuran : M Jumlah :</Text>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupItem, styles.groupChildLayout]} />
          <Text style={[styles.text, styles.textTypo1]}>-</Text>
          <Text style={[styles.text1, styles.textTypo1]}>+</Text>
          <Text style={[styles.text2, styles.textTypo]}>1</Text>
        </View>
        <Image
          style={[styles.archiveIcon, styles.ukuranMPosition]}
          resizeMode="cover"
          source={require("../assets/60archive.png")}
        />
        <Text style={[styles.tasBahuQoa, styles.tasTypo]}>
          Tas Bahu Qoa square Push - Lock -Green
        </Text>
        <Image
          style={styles.tickSquareIcon}
          resizeMode="cover"
          source={require("../assets/87ticksquare1.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleBorder]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/rectangle-904.png")}
        />
        <Text style={[styles.rp99900000, styles.ukuranMTypo]}>
          Rp. 1.399.000,00
        </Text>
        <Text style={styles.ukuranMTypo}>Ukuran : M Jumlah :</Text>
        <View
          style={[
            styles.rectangleParent3,
            styles.keranjang2Layout,
            styles.groupPosition,
          ]}
        >
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <View style={[styles.groupChild4, styles.groupChildLayout]} />
          <Text style={[styles.text, styles.textTypo1]}>-</Text>
          <Text style={[styles.text10, styles.textTypo1]}>+</Text>
          <Text style={[styles.text11, styles.textTypo]}>1</Text>
        </View>
        <Image
          style={[styles.archiveIcon, styles.ukuranMPosition]}
          resizeMode="cover"
          source={require("../assets/60archive.png")}
        />
        <Text style={[styles.tasBahuQoa, styles.tasTypo]}>
          Tas Saddle Gabine - Navy
        </Text>
        <Image
          style={styles.tickSquareIcon}
          resizeMode="cover"
          source={require("../assets/87ticksquare1.png")}
        />
      </View>
      <View style={[styles.rectangleParent4, styles.groupChild5Layout]}>
        <View style={[styles.groupChild5, styles.groupChild5Layout]} />
        <Pressable
          style={[styles.note, styles.noteLayout]}
          onPress={() => navigation.navigate("PesananDikirim")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/8note.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home11, styles.noteLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/2home11.png")}
          />
        </Pressable>
        <Text style={[styles.home, styles.homeTypo, styles.homePosition]}>
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text
          style={[
            styles.keranjang2,
            styles.homeTypo,
            styles.homePosition,
            styles.keranjang2Layout,
          ]}
        >
          Keranjang
        </Text>
        <Text
          style={[
            styles.chat,
            styles.chatPosition,
            styles.homeTypo,
            styles.homePosition,
          ]}
        >
          Chat
        </Text>
        <Pressable
          style={[styles.bag6, styles.noteLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/24bag6.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.chat20, styles.chatPosition, styles.boxLayout]}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/47chat20.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.groupChild6Layout]}
        onPress={() => navigation.navigate("Checkout")}
      >
        <Image
          style={[
            styles.groupChild6,
            styles.groupChild6Layout,
            styles.boxPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/rectangle-124.png")}
        />
        <Text style={[styles.lanjutkanKePembayaran, styles.pembayaranTypo]}>
          Lanjutkan ke Pembayaran
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  boxLayout: {
    height: 30,
    width: 30,
  },
  boxPosition: {
    top: 0,
    left: 0,
  },
  ukuranMTypo: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    left: 144,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
  },
  groupPosition: {
    left: 229,
    top: 98,
    height: 20,
  },
  groupChildLayout: {
    width: 23,
    borderColor: "#000",
    borderRadius: Border.br_sm,
    height: 20,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  textTypo1: {
    width: 9,
    fontSize: FontSize.size_xl,
    top: 2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  textTypo: {
    width: 8,
    fontSize: FontSize.size_xl,
    top: 2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  ukuranMPosition: {
    top: 101,
    position: "absolute",
  },
  tasTypo: {
    width: 182,
    fontWeight: "700",
    fontFamily: FontFamily.openSansHebrewCondensed,
    left: 144,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  pembayaranTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
  },
  rp999000001Typo: {
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.openSansHebrewCondensed,
    color: Color.black,
    top: 0,
  },
  rectangleBorder: {
    borderColor: "#e4823b",
    height: 142,
    width: 330,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    left: 15,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  groupInnerLayout: {
    width: 20,
    borderColor: "#000",
    borderRadius: Border.br_sm,
    height: 20,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  keranjang2Layout: {
    width: 61,
    position: "absolute",
  },
  groupChild5Layout: {
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
    color: Color.beige,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    height: 21,
  },
  homePosition: {
    top: 39,
    color: Color.beige,
  },
  chatPosition: {
    left: 297,
    position: "absolute",
  },
  groupChild6Layout: {
    height: 40,
    width: 197,
    position: "absolute",
  },
  box: {
    left: 0,
    position: "absolute",
  },
  lineIcon: {
    top: 5,
    width: 11,
    height: 21,
    left: 8,
    position: "absolute",
  },
  boxParent: {
    top: 20,
    left: 18,
    position: "absolute",
  },
  keranjang1: {
    left: 134,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "500",
    fontFamily: FontFamily.roboto,
    top: 25,
    position: "absolute",
  },
  frameChild: {
    top: 23,
    width: 95,
    height: 93,
    left: 38,
    borderRadius: Border.br_lg,
    position: "absolute",
  },
  rp99900000: {
    top: 70,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 40,
  },
  text: {
    left: 8,
  },
  text1: {
    left: 47,
  },
  text2: {
    left: 27,
  },
  rectangleGroup: {
    width: 63,
    height: 20,
    position: "absolute",
  },
  archiveIcon: {
    left: 298,
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  tickSquareIcon: {
    top: 59,
    width: 24,
    height: 24,
    left: 8,
    position: "absolute",
    overflow: "hidden",
  },
  tasBahuGabine: {
    fontSize: FontSize.size_lg,
    width: 182,
    top: 25,
  },
  rectangleParent: {
    top: 63,
    height: 142,
    width: 330,
    borderWidth: 1,
    borderColor: "rgba(255, 81, 112, 0.88)",
    borderStyle: "solid",
    borderRadius: Border.br_lg,
    left: 15,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  totalPembayaran: {
    left: 0,
  },
  rp999000001: {
    left: 239,
  },
  totalPembayaranParent: {
    top: 634,
    width: 326,
    height: 20,
    left: 15,
    position: "absolute",
  },
  groupInner: {
    left: 0,
  },
  rectangleView: {
    left: 34,
  },
  text3: {
    left: 7,
  },
  text4: {
    left: 40,
  },
  text5: {
    left: 23,
    width: 7,
    fontSize: FontSize.size_xl,
    top: 2,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "500",
    position: "absolute",
  },
  groupView: {
    width: 54,
    height: 20,
    position: "absolute",
  },
  tasBahuQoa: {
    top: 29,
    fontSize: FontSize.size_base,
    width: 182,
  },
  rectangleContainer: {
    top: 228,
  },
  groupChild4: {
    left: 38,
  },
  text10: {
    left: 45,
  },
  text11: {
    left: 26,
  },
  rectangleParent3: {
    height: 20,
  },
  rectangleParent2: {
    top: 393,
  },
  groupChild5: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderTopWidth: 1,
    borderColor: "rgba(255, 81, 112, 0.88)",
    borderStyle: "solid",
    width: 360,
    top: 0,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
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
    position: "absolute",
  },
  pesanan: {
    top: 40,
    left: 111,
    width: 53,
    position: "absolute",
  },
  keranjang2: {
    left: 195,
  },
  chat: {
    width: 40,
  },
  bag6: {
    left: 211,
    top: 8,
    width: 26,
  },
  chat20: {
    top: 7,
  },
  rectangleParent4: {
    top: 732,
  },
  groupChild6: {
    borderRadius: Border.br_md,
    left: 0,
  },
  lanjutkanKePembayaran: {
    top: 11,
    left: 16,
    color: Color.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.roboto,
  },
  vectorParent: {
    top: 673,
    left: 81,
  },
  keranjang: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Keranjang;
