import * as React from "react";
import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Margin, Border } from "../GlobalStyles";

const Detail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.detail, styles.iconLayout]}>
      <View style={styles.detailChild} />
      <Pressable
        style={[styles.boxParent, styles.boxLayout]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <View style={[styles.box, styles.boxLayout, styles.boxPosition]} />
        <Image
          style={styles.lineIcon}
          resizeMode="cover"
          source={require("../assets/line.png")}
        />
      </Pressable>
      <Text style={[styles.detail1, styles.detail1FlexBox]}>Detail</Text>
      <Image
        style={styles.detailItem}
        resizeMode="cover"
        source={require("../assets/rectangle-81.png")}
      />
      <Text style={[styles.tasBahuGabine, styles.tasTypo]}>
        Tas Bahu Gabine Tweed Curved - Navy
      </Text>
      <Text
        style={[styles.tasYangMencolok, styles.tasTypo, styles.detail1FlexBox]}
      >
        Tas yang mencolok ini sulit untuk ditolak. Mempertahankan gesper emas
        yang ikonik, garis Gabine kami berangkat menuju tingkatan baru, dengan
        siluet melengkung yang elegan dan sentuhan akhir tweed taktil yang akan
        membuat pakaian apa pun mencuri perhatian. Interior berukuran sedang
        menawarkan ruang yang cukup untuk kebutuhan sehari-hari Anda dan penutup
        zip menjaganya tetap aman. Gaya kan dengan gaun asimetris dan sepatu
        mules chunky untuk tampilan kontemporer.
      </Text>
      <Text style={[styles.deskripsiProduk, styles.detail2Typo]}>
        Deskripsi Produk :
      </Text>
      <Text style={[styles.detail2, styles.detail2Typo]}>Detail :</Text>
      <Text
        style={[
          styles.singleHandleZipContainer,
          styles.tambahKeKeranjangTypo,
          styles.tasTypo,
        ]}
      >
        <Text style={styles.singleHandle}>Single handle</Text>
        <Text style={styles.singleHandle}>Zip closure</Text>
        <Text style={styles.singleHandle}>
          Hadir dengan adjustable strap (dapat dilepas)
        </Text>
        <Text
          style={styles.singleHandle}
        >{`Bahan : Tweed & faux leather`}</Text>
        <Text style={styles.singleHandle}>Bagian dalam (cm) : 7.5</Text>
        <Text style={styles.singleHandle}>Lebar (cm) : 28.5</Text>
        <Text style={styles.tinggiCm}>Tinggi (cm) : 15.5</Text>
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
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
        <Text style={[styles.keranjang, styles.homeTypo, styles.homePosition]}>
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
        style={[styles.vectorParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("Detail2")}
      >
        <Image
          style={[styles.groupItem, styles.groupItemLayout, styles.boxPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-121.png")}
        />
        <Text style={[styles.tambahKeKeranjang, styles.tambahKeKeranjangTypo]}>
          Tambah Ke Keranjang
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  boxLayout: {
    height: 30,
    width: 30,
  },
  boxPosition: {
    left: 0,
    top: 0,
  },
  detail1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  tasTypo: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    color: Color.black,
  },
  detail2Typo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    left: 15,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  tambahKeKeranjangTypo: {
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    position: "absolute",
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
  groupItemLayout: {
    height: 40,
    width: 180,
    position: "absolute",
  },
  detailChild: {
    backgroundColor: Color.beige,
    height: 320,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  box: {
    position: "absolute",
  },
  lineIcon: {
    top: 5,
    left: 8,
    width: 11,
    height: 21,
    position: "absolute",
  },
  boxParent: {
    top: 20,
    left: 18,
    position: "absolute",
  },
  detail1: {
    top: 23,
    left: 154,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  detailItem: {
    top: 67,
    left: 94,
    width: 172,
    height: 217,
    position: "absolute",
  },
  tasBahuGabine: {
    top: 342,
    fontSize: FontSize.size_4xl,
    width: 246,
    left: 15,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  tasYangMencolok: {
    top: 394,
    left: 17,
    fontSize: FontSize.size_base,
    width: 328,
  },
  deskripsiProduk: {
    top: 370,
  },
  detail2: {
    top: 505,
  },
  singleHandle: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  tinggiCm: {
    margin: Margin.m_md,
  },
  singleHandleZipContainer: {
    top: 529,
    left: 20,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderStyle: "solid",
    borderColor: "rgba(255, 81, 112, 0.88)",
    borderTopWidth: 1,
    top: 0,
    height: 68,
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
    position: "absolute",
  },
  pesanan: {
    top: 40,
    left: 111,
    width: 53,
    position: "absolute",
  },
  keranjang: {
    left: 195,
    width: 61,
    position: "absolute",
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
  rectangleParent: {
    top: 732,
  },
  groupItem: {
    borderRadius: Border.br_md,
  },
  tambahKeKeranjang: {
    top: 11,
    left: 16,
    color: Color.white,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_3xl,
  },
  vectorParent: {
    top: 681,
    left: 90,
  },
  detail: {
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
  },
});

export default Detail;
