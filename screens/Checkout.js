import * as React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Checkout = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.checkout, styles.iconLayout1]}>
      <Text style={[styles.alamatPengiriman, styles.lokasiTypo]}>
        Alamat Pengiriman :
      </Text>
      <Text style={[styles.lokasi, styles.lokasiTypo]}>Lokasi :</Text>
      <Text style={styles.bagianIniWajib}>Bagian ini wajib diisi</Text>
      <Text style={[styles.simpanAlamatUntuk, styles.simpanAlamatUntukTypo]}>
        Simpan alamat untuk pembelian selanjutnya
      </Text>
      <Text
        style={[styles.pilihMetodePembayaran, styles.simpanAlamatUntukTypo]}
      >
        Pilih metode Pembayaran anda
      </Text>
      <View style={[styles.pengirimanWrapper, styles.wrapperPosition1]}>
        <Text style={[styles.pengiriman, styles.pengirimanTypo]}>
          PENGIRIMAN
        </Text>
      </View>
      <View style={[styles.pembayaranWrapper, styles.wrapperPosition1]}>
        <Text style={[styles.pembayaran, styles.pengirimanTypo]}>
          2. PEMBAYARAN
        </Text>
      </View>
      <Pressable
        style={styles.arrowLeft1}
        onPress={() => navigation.navigate("Keranjang")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/36arrowleft1.png")}
        />
      </Pressable>
      <View style={styles.keranjangParent}>
        <Text style={[styles.keranjang, styles.keranjangTypo]}>Keranjang</Text>
        <Text style={[styles.pembayaran1, styles.keranjangTypo]}>
          Pembayaran
        </Text>
        <Image
          style={[styles.arrowLeft1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/36arrowleft13.png")}
        />
      </View>
      <Text style={styles.checkOut}>Check Out</Text>
      <View style={[styles.namaLengkapWrapper, styles.alamatWrapperLayout]}>
        <Text style={[styles.namaLengkap, styles.alamatTypo]}>
          Nama Lengkap
        </Text>
      </View>
      <View style={[styles.alamatWrapper, styles.alamatWrapperLayout]}>
        <Text style={[styles.alamat, styles.alamatTypo]}>Alamat</Text>
      </View>
      <View style={[styles.alamatEmailWrapper, styles.alamatWrapperLayout]}>
        <Text style={[styles.alamatEmail, styles.alamatTypo]}>
          Alamat Email
        </Text>
      </View>
      <View
        style={[
          styles.provinsiParent,
          styles.wrapperLayout1,
          styles.provinsiParentBorder,
        ]}
      >
        <Text style={[styles.provinsi, styles.alamatTypo]}>Provinsi</Text>
        <Image
          style={styles.arrowLeft1Icon1}
          resizeMode="cover"
          source={require("../assets/36arrowleft14.png")}
        />
      </View>
      <View style={[styles.kodePosWrapper, styles.wrapperLayout1]}>
        <Text style={[styles.kodePos, styles.alamatTypo]}>Kode Pos</Text>
      </View>
      <View
        style={[
          styles.kartuKreditWrapper,
          styles.wrapperLayout,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.kartuKredit, styles.gopayTypo]}>Kartu Kredit</Text>
      </View>
      <View style={[styles.bcaVirtualAccountParent, styles.wrapperLayout]}>
        <Text style={[styles.bcaVirtualAccount, styles.gopayTypo]}>
          BCA Virtual Account
        </Text>
        <Image
          style={[styles.tickCircleIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/88tickcircle.png")}
        />
      </View>
      <View
        style={[
          styles.gopayWrapper,
          styles.wrapperLayout,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.gopay, styles.gopayTypo]}>Gopay</Text>
      </View>
      <View
        style={[
          styles.noHandphoneWrapper,
          styles.wrapperLayout1,
          styles.provinsiParentBorder,
        ]}
      >
        <Text style={[styles.namaLengkap, styles.alamatTypo]}>
          No Handphone
        </Text>
      </View>
      <Text style={[styles.informasiKontak, styles.lokasiTypo]}>
        Informasi Kontak
      </Text>
      <Image
        style={styles.tickSquareIcon}
        resizeMode="cover"
        source={require("../assets/87ticksquare3.png")}
      />
      <Text style={[styles.totalPembayaran, styles.rp99900000Typo]}>
        Total Pembayaran :
      </Text>
      <Text style={[styles.rp99900000, styles.rp99900000Typo]}>
        Rp. 999.000,00
      </Text>
      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("Checkout2")}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={styles.bayarSekarang}>Bayar Sekarang</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  lokasiTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    position: "absolute",
  },
  simpanAlamatUntukTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  wrapperPosition1: {
    backgroundColor: Color.gray_100,
    left: 27,
    height: 30,
    borderRadius: Border.br_md,
    position: "absolute",
    overflow: "hidden",
  },
  pengirimanTypo: {
    width: 95,
    top: 8,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  keranjangTypo: {
    top: 2,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  iconLayout: {
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  alamatWrapperLayout: {
    width: 303,
    borderWidth: 1,
    borderStyle: "solid",
    height: 29,
    borderColor: "#a2a2a2",
    borderRadius: Border.br_md,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  alamatTypo: {
    left: 19,
    top: 9,
    color: Color.gray_200,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  wrapperLayout1: {
    width: 150,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_md,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  provinsiParentBorder: {
    borderColor: "rgba(162, 162, 162, 0.55)",
    width: 150,
  },
  wrapperLayout: {
    height: 25,
    width: 150,
    borderWidth: 1,
    borderColor: "#a2a2a2",
    borderStyle: "solid",
    borderRadius: Border.br_md,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  wrapperPosition: {
    left: 47,
    height: 25,
  },
  gopayTypo: {
    left: 18,
    top: 7,
    color: Color.gray_200,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  rp99900000Typo: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 40,
    width: 131,
    position: "absolute",
  },
  alamatPengiriman: {
    top: 126,
    width: 122,
    left: 33,
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_lg,
  },
  lokasi: {
    top: 200,
    left: 35,
    width: 47,
  },
  bagianIniWajib: {
    top: 147,
    width: 108,
    color: Color.gray_200,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    left: 33,
    position: "absolute",
  },
  simpanAlamatUntuk: {
    top: 367,
    left: 70,
    width: 198,
  },
  pilihMetodePembayaran: {
    top: 481,
    left: 49,
    width: 141,
  },
  pengiriman: {
    left: 5,
  },
  pengirimanWrapper: {
    top: 86,
    width: 300,
    height: 30,
  },
  pembayaran: {
    left: 10,
  },
  pembayaranWrapper: {
    top: 444,
    width: 304,
    height: 30,
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
  keranjang: {
    width: 45,
    left: 0,
  },
  pembayaran1: {
    left: 62,
    width: 57,
    fontWeight: "700",
    top: 2,
  },
  arrowLeft1Icon: {
    left: 45,
    top: 0,
  },
  keranjangParent: {
    top: 65,
    width: 119,
    height: 15,
    left: 28,
    position: "absolute",
  },
  checkOut: {
    top: 23,
    left: 138,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  namaLengkap: {
    width: 68,
  },
  namaLengkapWrapper: {
    top: 165,
    height: 29,
    left: 29,
  },
  alamat: {
    width: 33,
  },
  alamatWrapper: {
    top: 219,
    height: 29,
    left: 29,
  },
  alamatEmail: {
    width: 61,
  },
  alamatEmailWrapper: {
    top: 405,
    height: 29,
    left: 28,
  },
  provinsi: {
    width: 38,
  },
  arrowLeft1Icon1: {
    left: 119,
    top: 7,
    width: 15,
    height: 15,
    position: "absolute",
    overflow: "hidden",
  },
  provinsiParent: {
    top: 291,
    height: 29,
    left: 29,
  },
  kodePos: {
    width: 45,
  },
  kodePosWrapper: {
    top: 254,
    width: 150,
    borderColor: "#a2a2a2",
    left: 29,
    height: 30,
  },
  kartuKredit: {
    width: 56,
  },
  kartuKreditWrapper: {
    top: 496,
  },
  bcaVirtualAccount: {
    width: 93,
  },
  tickCircleIcon: {
    top: 5,
    left: 126,
  },
  bcaVirtualAccountParent: {
    top: 526,
    left: 46,
  },
  gopay: {
    width: 31,
  },
  gopayWrapper: {
    top: 556,
  },
  noHandphoneWrapper: {
    top: 327,
    left: 28,
    height: 30,
  },
  informasiKontak: {
    top: 386,
    left: 32,
    width: 101,
  },
  tickSquareIcon: {
    top: 363,
    left: 44,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  totalPembayaran: {
    top: 614,
    left: 29,
  },
  rp99900000: {
    top: 620,
    left: 244,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_md,
    width: 131,
  },
  bayarSekarang: {
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
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  vectorParent: {
    top: 692,
    left: 119,
  },
  checkout: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Checkout;
