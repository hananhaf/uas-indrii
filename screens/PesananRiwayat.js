import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PesananRiwayat = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.pesananRiwayat, styles.iconLayout]}>
      <View style={[styles.pesananRiwayatInner, styles.frameParentLayout]}>
        <View style={[styles.frameParent, styles.frameParentLayout]}>
          <View style={[styles.honayoofficialParent, styles.groupParentLayout]}>
            <Text
              style={[
                styles.honayoofficial,
                styles.honayoofficialTypo,
                styles.groupViewPosition,
              ]}
            >
              Honayoofficial
            </Text>
            <Image
              style={[styles.frameChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-905.png")}
            />
            <Text
              style={[styles.tasBahuGabine, styles.tasTypo1]}
            >{`Tas Bahu Gabine Tweed Curved `}</Text>
            <Text style={[styles.navy, styles.produkTypo, styles.x1Position]}>
              Navy
            </Text>
            <Text style={[styles.x1, styles.produkTypo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.totalPesanan, styles.produkTypo]}>
              Total Pesanan : Rp. 999.000,00
            </Text>
            <Text style={[styles.rp99900000, styles.produkTypo]}>
              Rp. 999.000,00
            </Text>
            <View style={[styles.frameItem, styles.itemLayout]} />
            <Text style={[styles.nilai, styles.nilaiTypo]}>Nilai</Text>
          </View>
          <View style={[styles.honayoofficialGroup, styles.groupParentLayout]}>
            <Text
              style={[
                styles.honayoofficial,
                styles.honayoofficialTypo,
                styles.groupViewPosition,
              ]}
            >
              Honayoofficial
            </Text>
            <Image
              style={[styles.frameChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-906.png")}
            />
            <Text
              style={[styles.tasBahuGabine1, styles.tasTypo1]}
            >{`Tas Bahu Gabine Sculptrual Moira `}</Text>
            <Text style={[styles.navy, styles.produkTypo, styles.x1Position]}>
              Black
            </Text>
            <Text style={[styles.x1, styles.produkTypo, styles.x1Position]}>
              x2
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>2 Produk</Text>
            <Text style={[styles.totalPesanan, styles.produkTypo]}>
              Total Pesanan : Rp. 2.998.000,00
            </Text>
            <Text style={[styles.rp99900000, styles.produkTypo]}>
              Rp. 1.499.000,00
            </Text>
            <View style={[styles.frameItem, styles.itemLayout]} />
            <Text style={[styles.nilai, styles.nilaiTypo]}>Nilai</Text>
          </View>
          <View
            style={[styles.honayoofficialContainer, styles.groupParentLayout]}
          >
            <Text
              style={[
                styles.honayoofficial,
                styles.honayoofficialTypo,
                styles.groupViewPosition,
              ]}
            >
              Honayoofficial
            </Text>
            <Image
              style={[styles.frameChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-907.png")}
            />
            <Text style={[styles.tasHoboLarge, styles.tasTypo1]}>
              Tas Hobo Large Leona
            </Text>
            <Text style={[styles.navy, styles.produkTypo, styles.x1Position]}>
              Navy
            </Text>
            <Text style={[styles.x1, styles.produkTypo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.totalPesanan, styles.produkTypo]}>
              Total Pesanan : Rp. 1.499.000,00
            </Text>
            <Text style={[styles.rp99900000, styles.produkTypo]}>
              Rp. 1.499.000,00
            </Text>
            <View style={[styles.frameItem, styles.itemLayout]} />
            <Text style={[styles.nilai, styles.nilaiTypo]}>Nilai</Text>
          </View>
          <View style={[styles.frameView, styles.groupParentLayout]}>
            <Text
              style={[
                styles.honayoofficial,
                styles.honayoofficialTypo,
                styles.groupViewPosition,
              ]}
            >
              Honayoofficial
            </Text>
            <Image
              style={[styles.frameChild, styles.childLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-908.png")}
            />
            <Text style={[styles.tasBahuGeomatric, styles.tasTypo1]}>
              Tas Bahu Geomatric Nasrin
            </Text>
            <Text style={[styles.navy, styles.produkTypo, styles.x1Position]}>
              Blue
            </Text>
            <Text style={[styles.x1, styles.produkTypo, styles.x1Position]}>
              x1
            </Text>
            <Text style={[styles.produk, styles.produkTypo]}>1 Produk</Text>
            <Text style={[styles.totalPesanan, styles.produkTypo]}>
              Total Pesanan : Rp. 1.109.000,00
            </Text>
            <Text style={[styles.rp99900000, styles.produkTypo]}>
              Rp. 1.109.000,00
            </Text>
            <View style={[styles.frameItem, styles.itemLayout]} />
            <Text style={[styles.nilai, styles.nilaiTypo]}>Nilai</Text>
          </View>
          <View style={[styles.groupWrapper, styles.groupParentLayout]}>
            <View style={[styles.groupView, styles.groupViewPosition]}>
              <Text style={[styles.honayoofficial4, styles.honayoofficialTypo]}>
                Honayoofficial
              </Text>
              <Image
                style={[styles.groupChild, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-909.png")}
              />
              <Text style={[styles.tasHoboMini, styles.tasTypo]}>
                Tas Hobo Mini Lara
              </Text>
              <Text style={[styles.blue1, styles.x13Typo]}>Blue</Text>
              <Text style={[styles.x13, styles.x13Typo]}>x1</Text>
              <Text style={[styles.produk4, styles.produkTypo]}>1 Produk</Text>
              <Text style={[styles.totalPesanan4, styles.produkTypo]}>
                Total Pesanan : Rp. 1.099.000,00
              </Text>
              <Text style={[styles.rp109900000, styles.produkTypo]}>
                Rp. 1.099.000,00
              </Text>
              <View style={[styles.groupItem, styles.itemLayout]} />
              <Text style={[styles.nilai4, styles.nilaiTypo]}>Nilai</Text>
            </View>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View style={[styles.groupView, styles.groupViewPosition]}>
              <Text style={[styles.honayoofficial4, styles.honayoofficialTypo]}>
                Honayoofficial
              </Text>
              <Image
                style={[styles.groupChild, styles.childLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-9010.png")}
              />
              <Text style={[styles.tasBaltedMetalic, styles.tasTypo]}>
                Tas Balted Metalic Accent
              </Text>
              <Text style={[styles.blue1, styles.x13Typo]}>Pink</Text>
              <Text style={[styles.x13, styles.x13Typo]}>x1</Text>
              <Text style={[styles.produk4, styles.produkTypo]}>1 Produk</Text>
              <Text style={[styles.totalPesanan4, styles.produkTypo]}>
                Total Pesanan : Rp. 1.399.000,00
              </Text>
              <Text style={[styles.rp109900000, styles.produkTypo]}>
                Rp. 1.399.000,00
              </Text>
              <View style={[styles.groupItem, styles.itemLayout]} />
            </View>
            <Text style={[styles.nilai, styles.nilaiTypo]}>Nilai</Text>
          </View>
        </View>
      </View>
      <View style={styles.pesananRiwayatChild}>
        <View style={styles.arrowLeft1Parent}>
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
          <Text style={styles.pesanan}>Pesanan</Text>
          <Pressable
            style={[styles.dikirim, styles.dikirimPosition]}
            onPress={() => navigation.navigate("PesananDikirim")}
          >
            <Text style={styles.riwayatTypo}>Dikirim</Text>
          </Pressable>
          <Text
            style={[styles.riwayat, styles.riwayatTypo, styles.dikirimPosition]}
          >
            Riwayat
          </Text>
          <View style={[styles.lineView, styles.lineViewBorder]} />
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChild2Layout]}>
        <View
          style={[
            styles.groupChild2,
            styles.groupChild2Layout,
            styles.lineViewBorder,
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
        <Text style={[styles.pesanan1, styles.homeTypo]}>Pesanan</Text>
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
          style={[styles.chat20, styles.chatPosition, styles.chat20Layout]}
          onPress={() => navigation.navigate("Chat")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/47chat201.png")}
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
  frameParentLayout: {
    width: 320,
    position: "absolute",
  },
  groupParentLayout: {
    height: 156,
    left: 0,
    width: 320,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  honayoofficialTypo: {
    width: 81,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupViewPosition: {
    top: 12,
    left: 14,
  },
  childLayout: {
    height: 60,
    width: 60,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  tasTypo1: {
    fontFamily: FontFamily.openSansHebrewCondensed,
    left: 101,
    top: 47,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  produkTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  x1Position: {
    top: 69,
    fontSize: FontSize.size_base,
  },
  itemLayout: {
    height: 25,
    width: 65,
    backgroundColor: Color.orange,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  nilaiTypo: {
    color: Color.white,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    position: "absolute",
  },
  tasTypo: {
    left: 87,
    top: 35,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  x13Typo: {
    top: 57,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.openSansHebrewCondensed,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  chat20Layout: {
    height: 30,
    width: 30,
  },
  dikirimPosition: {
    top: 59,
    position: "absolute",
  },
  riwayatTypo: {
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
  },
  lineViewBorder: {
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  groupChild2Layout: {
    height: 68,
    width: 360,
    left: 0,
    position: "absolute",
  },
  bag6Layout: {
    height: 27,
    position: "absolute",
  },
  homeTypo: {
    height: 21,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  homePosition: {
    top: 39,
    height: 21,
  },
  chatPosition: {
    left: 297,
    position: "absolute",
  },
  honayoofficial: {
    left: 14,
  },
  frameChild: {
    top: 33,
    left: 14,
  },
  tasBahuGabine: {
    width: 149,
  },
  navy: {
    left: 103,
  },
  x1: {
    left: 287,
  },
  produk: {
    top: 103,
    left: 14,
  },
  totalPesanan: {
    top: 100,
    left: 179,
  },
  rp99900000: {
    top: 86,
    left: 239,
  },
  frameItem: {
    top: 119,
    left: 231,
  },
  nilai: {
    top: 125,
    left: 254,
  },
  honayoofficialParent: {
    top: 0,
  },
  tasBahuGabine1: {
    width: 161,
  },
  honayoofficialGroup: {
    top: 151,
  },
  tasHoboLarge: {
    width: 105,
  },
  honayoofficialContainer: {
    top: 307,
  },
  tasBahuGeomatric: {
    width: 130,
  },
  frameView: {
    top: 463,
  },
  honayoofficial4: {
    left: 0,
    top: 0,
  },
  groupChild: {
    top: 21,
    left: 0,
  },
  tasHoboMini: {
    width: 91,
  },
  blue1: {
    left: 89,
  },
  x13: {
    left: 273,
  },
  produk4: {
    top: 91,
    left: 0,
  },
  totalPesanan4: {
    top: 88,
    left: 165,
  },
  rp109900000: {
    top: 74,
    left: 225,
  },
  groupItem: {
    top: 107,
    left: 217,
  },
  nilai4: {
    top: 113,
    left: 240,
  },
  groupView: {
    width: 289,
    height: 132,
    left: 14,
    position: "absolute",
  },
  groupWrapper: {
    top: 619,
  },
  tasBaltedMetalic: {
    width: 121,
  },
  groupParent: {
    top: 775,
  },
  frameParent: {
    height: 931,
    left: 0,
    top: 0,
  },
  pesananRiwayatInner: {
    top: 115,
    left: 20,
    height: 588,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowLeft1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  pesanan: {
    top: 5,
    left: 121,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  dikirim: {
    left: 26,
  },
  riwayat: {
    left: 114,
  },
  lineView: {
    top: 78,
    left: 110,
    borderColor: "#000",
    width: 55,
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
  pesananRiwayatChild: {
    height: 107,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChild2: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    borderColor: "#e4823b",
    backgroundColor: Color.orange,
    height: 68,
    borderTopWidth: 1,
    borderStyle: "solid",
    top: 0,
  },
  noteIcon: {
    left: 124,
    width: 27,
    top: 7,
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
    position: "absolute",
  },
  pesanan1: {
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
  pesananRiwayat: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default PesananRiwayat;
