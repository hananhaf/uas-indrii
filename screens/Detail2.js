import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Margin } from "../GlobalStyles";

const Detail2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.detail2, styles.iconLayout]}>
      <View
        style={[
          styles.rectangleParent,
          styles.parentLayout,
          styles.parentPosition,
        ]}
      >
        <View style={[styles.frameChild, styles.parentLayout]} />
        <View style={[styles.boxParent, styles.boxLayout]}>
          <View style={[styles.box, styles.boxLayout]} />
          <Image
            style={styles.lineIcon}
            resizeMode="cover"
            source={require("../assets/line.png")}
          />
        </View>
        <Text style={[styles.detail, styles.detailFlexBox]}>Detail</Text>
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/rectangle-81.png")}
        />
        <Text style={[styles.tasBahuGabine, styles.tasLayout, styles.tasTypo]}>
          Tas Bahu Gabine Tweed Curved - Navy
        </Text>
        <Text
          style={[styles.tasYangMencolok, styles.tasTypo, styles.detailFlexBox]}
        >
          Tas yang mencolok ini sulit untuk ditolak. Mempertahankan gesper emas
          yang ikonik, garis Gabine kami berangkat menuju tingkatan baru, dengan
          siluet melengkung yang elegan dan sentuhan akhir tweed taktil yang
          akan membuat pakaian apa pun mencuri perhatian. Interior berukuran
          sedang menawarkan ruang yang cukup untuk kebutuhan sehari-hari Anda
          dan penutup zip menjaganya tetap aman. Gaya kan dengan gaun asimetris
          dan sepatu mules chunky untuk tampilan kontemporer.
        </Text>
        <Text style={[styles.deskripsiProduk, styles.detail1Typo]}>
          Deskripsi Produk :
        </Text>
        <Text style={[styles.detail1, styles.detail1Typo]}>Detail :</Text>
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
        <View style={[styles.vectorParent, styles.vectorLayout]}>
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/rectangle-121.png")}
          />
          <Text
            style={[styles.tambahKeKeranjang, styles.tambahKeKeranjangTypo]}
          >
            Tambah Ke Keranjang
          </Text>
        </View>
      </View>
      <View style={styles.detail2Child} />
      <View
        style={[
          styles.tasBahuGabineTweedCurvedParent,
          styles.parentLayout,
          styles.parentPosition,
        ]}
      >
        <Text
          style={[styles.tasBahuGabine1, styles.warnaTypo, styles.tasLayout]}
        >
          Tas Bahu Gabine Tweed Curved - Navy
        </Text>
        <Text style={[styles.rp99900000, styles.warnaTypo]}>
          Rp. 999.000,00
        </Text>
        <Text style={[styles.warna, styles.warnaTypo]}>Warna :</Text>
        <View style={styles.ellipseParent}>
          <Image
            style={[styles.groupItem, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={[styles.groupInner, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-3.png")}
          />
          <Image
            style={[styles.groupChild1, styles.groupLayout1]}
            resizeMode="cover"
            source={require("../assets/ellipse-4.png")}
          />
        </View>
        <Text style={[styles.ukuran, styles.warnaTypo]}>{`Ukuran : `}</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={[styles.rectangleView, styles.groupChild2Layout]} />
            <Text style={[styles.s, styles.sTypo]}>S</Text>
          </View>
          <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
            <View
              style={[
                styles.groupChild2,
                styles.groupChildBg,
                styles.groupChild2Layout,
              ]}
            />
            <Text style={[styles.m, styles.sTypo]}>M</Text>
          </View>
        </View>
        <Pressable
          style={[styles.vectorGroup, styles.vectorLayout]}
          onPress={() => navigation.navigate("Keranjang")}
        >
          <Image
            style={styles.groupChild}
            resizeMode="cover"
            source={require("../assets/rectangle-121.png")}
          />
          <Text
            style={[styles.tambahKeKeranjang, styles.tambahKeKeranjangTypo]}
          >
            Tambah Ke Keranjang
          </Text>
        </Pressable>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupView, styles.groupLayout]}>
            <Image
              style={[styles.groupChild3, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-86.png")}
            />
            <Image
              style={[styles.groupChild4, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-87.png")}
            />
            <Image
              style={[styles.groupChild5, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-88.png")}
            />
            <Image
              style={[styles.groupChild6, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-88.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent1, styles.groupChild7Layout]}>
        <View
          style={[
            styles.groupChild7,
            styles.groupChild7Layout,
            styles.groupChildBg,
          ]}
        />
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  parentLayout: {
    width: 360,
    position: "absolute",
  },
  parentPosition: {
    left: -1,
    width: 360,
    overflow: "hidden",
  },
  boxLayout: {
    width: 30,
    height: 30,
  },
  detailFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  tasLayout: {
    width: 246,
    fontSize: FontSize.size_4xl,
  },
  tasTypo: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    color: Color.black,
  },
  detail1Typo: {
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
  vectorLayout: {
    height: 40,
    width: 180,
    position: "absolute",
  },
  warnaTypo: {
    left: 27,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  groupLayout1: {
    width: 20,
    height: 20,
    top: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 45,
    height: 30,
    top: 0,
    position: "absolute",
  },
  groupChild2Layout: {
    borderWidth: 1,
    width: 45,
    borderRadius: Border.br_md,
    height: 30,
    left: 0,
    position: "absolute",
  },
  sTypo: {
    fontSize: FontSize.size_2xl,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    textAlign: "left",
    top: 5,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.orange,
    borderStyle: "solid",
    top: 0,
  },
  groupLayout: {
    height: 148,
    position: "absolute",
  },
  groupChildLayout: {
    height: 146,
    width: 150,
    position: "absolute",
  },
  groupChild7Layout: {
    height: 68,
    left: 0,
    width: 360,
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
  frameChild: {
    backgroundColor: Color.beige,
    height: 320,
    left: 0,
    top: 0,
  },
  box: {
    height: 30,
    left: 0,
    top: 0,
    position: "absolute",
  },
  lineIcon: {
    left: 8,
    width: 11,
    height: 21,
    top: 5,
    position: "absolute",
  },
  boxParent: {
    top: 20,
    height: 30,
    left: 18,
    position: "absolute",
  },
  detail: {
    top: 23,
    left: 154,
    fontSize: FontSize.size_5xl,
    color: Color.black,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  frameItem: {
    top: 67,
    left: 94,
    width: 172,
    height: 217,
    position: "absolute",
  },
  tasBahuGabine: {
    top: 342,
    left: 15,
    width: 246,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    fontSize: FontSize.size_4xl,
    textAlign: "left",
    position: "absolute",
  },
  tasYangMencolok: {
    top: 394,
    width: 328,
    fontSize: FontSize.size_base,
    left: 17,
  },
  deskripsiProduk: {
    top: 370,
  },
  detail1: {
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
    borderRadius: Border.br_md,
    height: 40,
    width: 180,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tambahKeKeranjang: {
    top: 11,
    left: 16,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 2,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.white,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_3xl,
  },
  vectorParent: {
    top: 675,
    left: 90,
  },
  rectangleParent: {
    top: 0,
    height: 800,
  },
  detail2Child: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: 359,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    height: 800,
  },
  tasBahuGabine1: {
    top: 25,
  },
  rp99900000: {
    top: 61,
    fontSize: FontSize.size_base,
  },
  warna: {
    top: 250,
    fontSize: FontSize.size_base,
  },
  groupItem: {
    left: 0,
  },
  groupInner: {
    left: 25,
  },
  ellipseIcon: {
    left: 49,
  },
  groupChild1: {
    left: 72,
  },
  ellipseParent: {
    top: 274,
    left: 44,
    width: 92,
    height: 20,
    position: "absolute",
  },
  ukuran: {
    top: 299,
    fontSize: FontSize.size_base,
  },
  rectangleView: {
    borderColor: "#e4823b",
    borderStyle: "solid",
    borderWidth: 1,
    top: 0,
    backgroundColor: Color.white,
  },
  s: {
    color: Color.orange,
    left: 18,
  },
  rectangleGroup: {
    left: 0,
  },
  groupChild2: {
    borderColor: "#fff",
  },
  m: {
    color: Color.white,
    left: 17,
  },
  rectangleContainer: {
    left: 63,
  },
  groupParent: {
    top: 323,
    left: 40,
    width: 108,
    height: 30,
    position: "absolute",
  },
  vectorGroup: {
    top: 403,
    left: 91,
  },
  groupChild3: {
    top: 2,
    left: 0,
  },
  groupChild4: {
    left: 173,
    top: 0,
  },
  groupChild5: {
    left: 351,
    top: 0,
  },
  groupChild6: {
    left: 529,
    top: 0,
  },
  groupView: {
    width: 679,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 92,
    left: 106,
    width: 150,
    height: 148,
  },
  tasBahuGabineTweedCurvedParent: {
    top: 265,
    borderRadius: Border.br_lg,
    height: 464,
    backgroundColor: Color.white,
  },
  groupChild7: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    borderColor: "rgba(255, 81, 112, 0.88)",
    borderTopWidth: 1,
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
    height: 30,
  },
  rectangleParent1: {
    top: 732,
  },
  detail2: {
    flex: 1,
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.white,
  },
});

export default Detail2;
