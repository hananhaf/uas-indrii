import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.chat, styles.chatLayout]}>
      <View style={[styles.chatInner, styles.chatInnerLayout]}>
        <View style={[styles.frameParent, styles.chatInnerLayout]}>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.grosirtasbrandedjakarta, styles.zaraTypo]}>
              Grosirtasbrandedjakarta
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangGroup,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.slingbadsalatiga, styles.zaraTypo]}>
              Slingbadsalatiga
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangContainer,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.mossdom, styles.zaraTypo]}>Mossdom</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View style={[styles.frameView, styles.terimakasihParentLayout]}>
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.honayoofficial, styles.zaraTypo]}>
              Honayoofficial
            </Text>
            <Text style={[styles.honayoofficial, styles.zaraTypo]}>
              Honayoofficial
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent1,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.coach, styles.zaraTypo]}>Coach</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent2,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text
              style={[styles.charlesKeith, styles.zaraTypo]}
            >{`Charles & Keith`}</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent3,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.zara, styles.zaraTypo]}>Zara</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent4,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.palomino, styles.zaraTypo]}>Palomino</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent5,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.rorokenes, styles.zaraTypo]}>Rorokenes</Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent6,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.philipeJourdan, styles.zaraTypo]}>
              Philipe Jourdan
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent7,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.philipeJourdan, styles.zaraTypo]}>
              Philipe Jourdan
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent8,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.aestheticPleasure, styles.zaraTypo]}>
              Aesthetic Pleasure
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-5.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile1.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent9,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.aestheticPleasure, styles.zaraTypo]}>
              Aesthetic Pleasure
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-512.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile13.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent10,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.charlesKeith, styles.zaraTypo]}>
              Motivigaofficial
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-512.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile13.png")}
            />
          </View>
          <View
            style={[
              styles.terimakasihSudahBerbelanjangParent11,
              styles.terimakasihParentLayout,
            ]}
          >
            <Text style={styles.terimakasihSudahBerbelanjang}>
              Terimakasih sudah berbelanjang di toko kami.
            </Text>
            <Text style={[styles.aestheticPleasure, styles.zaraTypo]}>
              Mannequin Plastic
            </Text>
            <Image
              style={[
                styles.frameChild,
                styles.frameChildLayout,
                styles.frameChildPosition,
              ]}
              resizeMode="cover"
              source={require("../assets/ellipse-512.png")}
            />
            <Image
              style={styles.profileIcon}
              resizeMode="cover"
              source={require("../assets/11profile13.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View
          style={[
            styles.groupChild,
            styles.childGroupPosition,
            styles.groupChildLayout,
          ]}
        />
        <Pressable
          style={[styles.note, styles.noteLayout]}
          onPress={() => navigation.navigate("PesananDikirim")}
        >
          <Image
            style={[styles.icon, styles.chatLayout]}
            resizeMode="cover"
            source={require("../assets/8note1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.home11, styles.noteLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Image
            style={[styles.icon, styles.chatLayout]}
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
        <Text
          style={[
            styles.chat1,
            styles.chat1Position,
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
            style={[styles.icon, styles.chatLayout]}
            resizeMode="cover"
            source={require("../assets/24bag65.png")}
          />
        </Pressable>
        <Image
          style={[
            styles.chat20Icon,
            styles.chat1Position,
            styles.frameChildLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/47chat201.png")}
        />
      </View>
      <View style={[styles.chatChild, styles.childGroupPosition]}>
        <View style={styles.arrowLeft1Parent}>
          <Pressable
            style={[
              styles.arrowLeft1,
              styles.childGroupPosition,
              styles.frameChildLayout,
            ]}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={[styles.icon, styles.chatLayout]}
              resizeMode="cover"
              source={require("../assets/36arrowleft1.png")}
            />
          </Pressable>
          <Text style={styles.chat2}>Chat</Text>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View
              style={[
                styles.groupItem,
                styles.groupLayout,
                styles.childGroupPosition,
              ]}
            />
            <Text
              style={styles.cariKontakpenjualPesan}
            >{`Cari Kontak,Penjual,& Pesan`}</Text>
            <Image
              style={[styles.searchIcon, styles.frameChildPosition]}
              resizeMode="cover"
              source={require("../assets/38search1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatLayout: {
    width: "100%",
    overflow: "hidden",
  },
  chatInnerLayout: {
    width: 316,
    position: "absolute",
  },
  terimakasihParentLayout: {
    height: 56,
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
    right: 0,
    borderStyle: "solid",
    width: 316,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  zaraTypo: {
    fontWeight: "700",
    top: 14,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontSize: FontSize.size_lg,
    left: 48,
    position: "absolute",
  },
  frameChildLayout: {
    height: 30,
    width: 30,
  },
  frameChildPosition: {
    left: 11,
    position: "absolute",
  },
  groupChildLayout: {
    height: 68,
    width: 360,
    position: "absolute",
  },
  childGroupPosition: {
    top: 0,
    left: 0,
  },
  noteLayout: {
    height: 27,
    position: "absolute",
  },
  homeTypo: {
    height: 21,
    color: Color.white,
    fontSize: FontSize.size_xl,
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.roboto,
  },
  homePosition: {
    top: 39,
    color: Color.white,
    fontSize: FontSize.size_xl,
  },
  chat1Position: {
    left: 297,
    position: "absolute",
  },
  groupLayout: {
    width: 307,
    height: 30,
    position: "absolute",
  },
  terimakasihSudahBerbelanjang: {
    top: 31,
    width: 247,
    textAlign: "left",
    color: Color.black,
    fontSize: FontSize.size_lg,
    left: 48,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  grosirtasbrandedjakarta: {
    width: 133,
  },
  frameChild: {
    top: 15,
  },
  profileIcon: {
    height: "42.86%",
    width: "7.59%",
    top: "32.14%",
    right: "87.97%",
    bottom: "25%",
    left: "4.43%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  terimakasihSudahBerbelanjangParent: {
    bottom: 784,
  },
  slingbadsalatiga: {
    width: 91,
  },
  terimakasihSudahBerbelanjangGroup: {
    bottom: 728,
  },
  mossdom: {
    width: 54,
  },
  terimakasihSudahBerbelanjangContainer: {
    bottom: 672,
  },
  honayoofficial: {
    width: 81,
  },
  frameView: {
    bottom: 616,
  },
  coach: {
    width: 38,
  },
  terimakasihSudahBerbelanjangParent1: {
    bottom: 560,
  },
  charlesKeith: {
    width: 87,
  },
  terimakasihSudahBerbelanjangParent2: {
    bottom: 504,
  },
  zara: {
    width: 26,
  },
  terimakasihSudahBerbelanjangParent3: {
    bottom: 448,
  },
  palomino: {
    width: 57,
  },
  terimakasihSudahBerbelanjangParent4: {
    bottom: 392,
  },
  rorokenes: {
    width: 64,
  },
  terimakasihSudahBerbelanjangParent5: {
    bottom: 336,
  },
  philipeJourdan: {
    width: 88,
  },
  terimakasihSudahBerbelanjangParent6: {
    bottom: 280,
  },
  terimakasihSudahBerbelanjangParent7: {
    bottom: 224,
  },
  aestheticPleasure: {
    width: 107,
  },
  terimakasihSudahBerbelanjangParent8: {
    bottom: 168,
  },
  terimakasihSudahBerbelanjangParent9: {
    bottom: 56,
  },
  terimakasihSudahBerbelanjangParent10: {
    bottom: 0,
  },
  terimakasihSudahBerbelanjangParent11: {
    bottom: 112,
  },
  frameParent: {
    right: -2,
    bottom: -268,
    height: 840,
  },
  chatInner: {
    top: 128,
    left: 20,
    height: 574,
  },
  groupChild: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderColor: "#e4823b",
    borderTopWidth: 1,
    height: 68,
    borderStyle: "solid",
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
  keranjang: {
    left: 195,
    width: 61,
    position: "absolute",
  },
  chat1: {
    width: 40,
  },
  bag6: {
    left: 211,
    top: 8,
    width: 26,
  },
  chat20Icon: {
    top: 7,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 732,
    left: 0,
    height: 68,
  },
  arrowLeft1: {
    position: "absolute",
  },
  chat2: {
    top: 3,
    left: 137,
    fontSize: FontSize.size_5xl,
    fontWeight: "500",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_md,
    backgroundColor: Color.gray_400,
  },
  cariKontakpenjualPesan: {
    left: 31,
    fontSize: FontSize.size_2xl,
    color: Color.gray_500,
    textAlign: "center",
    width: 186,
    height: 14,
    top: 7,
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  searchIcon: {
    top: 5,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  rectangleGroup: {
    top: 54,
    left: 9,
  },
  arrowLeft1Parent: {
    left: 22,
    height: 84,
    top: 14,
    width: 316,
    position: "absolute",
  },
  chatChild: {
    height: 112,
    width: 360,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  chat: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default Chat;
