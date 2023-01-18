import * as React from "react";
import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Checkout2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout2, styles.iconLayout]}>
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
      <Text style={styles.checkOut}>Check Out</Text>
      <Image
        style={styles.tickCircleIcon}
        resizeMode="cover"
        source={require("../assets/88tickcircle1.png")}
      />
      <View style={[styles.lineParent, styles.lineParentLayout]}>
        <Image
          style={[styles.frameChild, styles.lineParentLayout]}
          resizeMode="cover"
          source={require("../assets/line-3.png")}
        />
        <Text style={[styles.ringkasanPesanan, styles.pesananTypo]}>
          RINGKASAN PESANAN
        </Text>
        <Text
          style={[styles.subTotal, styles.subTotalTypo]}
        >{`Sub Total `}</Text>
        <Text style={[styles.rp99900000, styles.subTotalTypo]}>
          Rp. 999.000,00
        </Text>
        <Text style={[styles.text, styles.textTypo]}>0</Text>
        <Text style={[styles.pengiriman, styles.textTypo]}>Pengiriman</Text>
        <Text style={[styles.metodePembayaran, styles.metodePembayaranTypo]}>
          Metode Pembayaran
        </Text>
        <Text style={[styles.bcaVirtualAccount, styles.metodePembayaranTypo]}>
          BCA Virtual Account
        </Text>
        <Text style={[styles.jumlah, styles.jumlahTypo]}>Jumlah</Text>
        <Text style={[styles.rp999000001, styles.jumlahTypo]}>
          Rp. 999.000,00
        </Text>
      </View>
      <Text style={[styles.text1, styles.text1Typo]}>12345678980123</Text>
      <Text style={[styles.nomorPesanan, styles.text1Typo]}>
        Nomor Pesanan :
      </Text>
      <Text style={[styles.pesananSelesai, styles.pesananTypo]}>
        PESANAN SELESAI
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  lineParentLayout: {
    width: 303,
    position: "absolute",
  },
  pesananTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  subTotalTypo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  textTypo: {
    top: 65,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  metodePembayaranTypo: {
    width: 113,
    top: 84,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  jumlahTypo: {
    top: 103,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_2xl,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    position: "absolute",
  },
  checkOut: {
    top: 23,
    left: 138,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  tickCircleIcon: {
    top: 188,
    left: 103,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 30,
    left: 0,
    height: 2,
  },
  ringkasanPesanan: {
    top: 8,
    left: 84,
    fontSize: FontSize.size_xl,
  },
  subTotal: {
    top: 44,
    width: 53,
    left: 18,
  },
  rp99900000: {
    top: 40,
    left: 200,
    width: 81,
  },
  text: {
    left: 272,
    width: 9,
  },
  pengiriman: {
    width: 66,
    left: 18,
  },
  metodePembayaran: {
    left: 18,
  },
  bcaVirtualAccount: {
    left: 173,
  },
  jumlah: {
    width: 42,
    left: 18,
  },
  rp999000001: {
    left: 194,
    width: 87,
  },
  lineParent: {
    top: 288,
    left: 35,
    borderRadius: Border.br_lg,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    height: 137,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  text1: {
    top: 242,
    left: 124,
    width: 111,
  },
  nomorPesanan: {
    top: 199,
    left: 146,
    width: 112,
  },
  pesananSelesai: {
    top: 143,
    left: 92,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
  },
  checkout2: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Checkout2;
