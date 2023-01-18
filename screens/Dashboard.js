import * as React from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboard}>
      <View style={[styles.dashboardInner, styles.groupParentLayout]}>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
          <View style={[styles.rectangleParent, styles.pathIconPosition]}>
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <View
              style={[styles.heart, styles.boxLayout, styles.heartPosition2]}
            >
              <View style={[styles.box, styles.boxLayout]} />
              <Image
                style={[styles.pathIcon, styles.pathIconPosition]}
                resizeMode="cover"
                source={require("../assets/path.png")}
              />
            </View>
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-66.png")}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-66.png")}
            />
            <Text style={[styles.tasBahuAlcott, styles.tasTypo]}>
              Tas Bahu Alcott Scarf Chain - Link - Dark Mass
            </Text>
            <Text
              style={[styles.rp109900000, styles.tasTypo1, styles.tasTypo2]}
            >
              Rp. 1.099.000,00
            </Text>
            <View style={[styles.component5, styles.componentShadowBox]}>
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.rectangleGroup}
            onPress={() => navigation.navigate("Detail")}
          >
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-79.png")}
            />
            <Text style={[styles.tasHobiBraided, styles.tasTypo]}>
              Tas Hobi Braided Heandle Ceona - Light Blue
            </Text>
            <Text
              style={[styles.rp149900000, styles.tasTypo1, styles.tasTypo2]}
            >
              Rp. 1.499.000,00
            </Text>
            <View style={[styles.component6, styles.componentShadowBox]}>
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </View>
            <View
              style={[styles.heart1, styles.boxLayout, styles.heartPosition2]}
            >
              <View style={[styles.box, styles.boxLayout]} />
              <Image
                style={[styles.pathIcon, styles.pathIconPosition]}
                resizeMode="cover"
                source={require("../assets/path1.png")}
              />
            </View>
          </Pressable>
          <View style={[styles.vectorParent, styles.vectorParentPosition]}>
            <Image
              style={[styles.groupChild2, styles.groupChildLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-22.png")}
            />
            <View style={[styles.component1, styles.componentShadowBox]}>
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </View>
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-691.png")}
            />
            <View style={[styles.heart2, styles.heartPosition1]}>
              <View style={[styles.box, styles.boxLayout]} />
              <Image
                style={[styles.pathIcon2, styles.pathIcon2Position]}
                resizeMode="cover"
                source={require("../assets/path2.png")}
              />
            </View>
            <Text style={[styles.rp99900000, styles.tasTypo1, styles.tasTypo2]}>
              Rp. 999.000,00
            </Text>
            <Text
              style={[styles.tasBahuHalf, styles.tasTypo1, styles.tasTypo2]}
            >
              Tas Bahu Half Moon-Beige
            </Text>
          </View>
          <View
            style={[styles.rectangleContainer, styles.vectorParentPosition]}
          >
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-73.png")}
            />
            <View style={[styles.heart3, styles.heartPosition1]}>
              <View style={[styles.box3, styles.boxLayout, styles.box3Bg]} />
              <Image
                style={[styles.pathIcon2, styles.pathIcon2Position]}
                resizeMode="cover"
                source={require("../assets/path2.png")}
              />
            </View>
            <Text style={[styles.rp99900000, styles.tasTypo1, styles.tasTypo2]}>
              Rp. 1.399.000,00
            </Text>
            <Text
              style={[styles.tasBahuHalf, styles.tasTypo1, styles.tasTypo2]}
            >
              Tas Saddle Gabine - Navy
            </Text>
            <View style={[styles.component1, styles.componentShadowBox]}>
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </View>
          </View>
          <View style={[styles.groupView, styles.groupViewPosition]}>
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-76.png")}
            />
            <View style={[styles.heart4, styles.heartPosition]}>
              <View style={[styles.box, styles.boxLayout]} />
              <Image
                style={[styles.pathIcon2, styles.pathIcon2Position]}
                resizeMode="cover"
                source={require("../assets/path2.png")}
              />
            </View>
            <Text
              style={[styles.rp999000001, styles.tasTypo1, styles.tasTypo2]}
            >
              Rp. 999.000,00
            </Text>
            <Text
              style={[styles.rp999000001, styles.tasTypo1, styles.tasTypo2]}
            >
              Rp. 999.000,00
            </Text>
            <Text style={[styles.tasBahuQoa, styles.tasTypo1, styles.tasTypo2]}>
              Tas Bahu Qoa square Push - Lock -Green
            </Text>
            <View style={[styles.component3, styles.componentShadowBox]}>
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </View>
          </View>
          <View style={[styles.rectangleParent1, styles.groupViewPosition]}>
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <View
              style={[
                styles.groupChild,
                styles.childShadowBox,
                styles.groupChildLayout1,
              ]}
            />
            <Image
              style={styles.groupInner}
              resizeMode="cover"
              source={require("../assets/rectangle-76.png")}
            />
            <View style={[styles.heart5, styles.heartPosition]}>
              <View style={[styles.box, styles.boxLayout]} />
              <Image
                style={[styles.pathIcon2, styles.pathIcon2Position]}
                resizeMode="cover"
                source={require("../assets/path2.png")}
              />
            </View>
            <Text style={[styles.rp999000003, styles.rp999000003Typo]}>
              Rp. 999.000,00
            </Text>
            <Text style={[styles.tasBahuGabine, styles.rp999000003Typo]}>
              Tas Bahu Gabine Tweed Curved - Navy
            </Text>
            <Pressable
              style={[styles.component4, styles.componentShadowBox]}
              onPress={() => navigation.navigate("Detail")}
            >
              <View
                style={[
                  styles.component5Child,
                  styles.iconLayout,
                  styles.childShadowBox,
                ]}
              />
              <Text style={[styles.allProduct, styles.allProductTypo]}>
                Lihat Detail
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.notificationParent,
          styles.pathIcon2Position,
          styles.box3Bg,
        ]}
      >
        <Pressable
          style={[styles.notification, styles.homeLayout]}
          onPress={() => navigation.navigate("Notifikasi")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/76notification.png")}
          />
        </Pressable>
        <Text style={[styles.hallo, styles.halloTypo]}>{`Hallo `}</Text>
        <Text style={[styles.indriyas, styles.halloTypo]}>Indriyas!</Text>
        <View style={[styles.rectangleParent2, styles.groupChild12Layout]}>
          <View style={[styles.groupChild12, styles.groupChild12Layout]} />
          <Text style={[styles.searchForBrand, styles.allProductTypo]}>
            Search for brand
          </Text>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require("../assets/38search.png")}
          />
        </View>
        <Text style={[styles.produkKami, styles.tasTypo1]}>Produk Kami</Text>
        <Pressable
          style={[styles.profile, styles.chat20Layout]}
          onPress={() => navigation.navigate("AkunSaya")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/11profile.png")}
          />
        </Pressable>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.rectangleParent3, styles.groupWrapperLayout]}>
            <Image
              style={[styles.groupChild13, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-5.png")}
            />
            <Image
              style={[styles.groupChild14, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-70.png")}
            />
            <Image
              style={[styles.groupChild15, styles.groupChildLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-90.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.groupChild16Layout]}>
        <View style={[styles.groupChild16, styles.groupChild16Layout]} />
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
        <Image
          style={[styles.home11Icon, styles.noteLayout]}
          resizeMode="cover"
          source={require("../assets/2home11.png")}
        />
        <Text
          style={[
            styles.home,
            styles.homeTypo,
            styles.homeTypo1,
            styles.homeLayout,
          ]}
        >
          Home
        </Text>
        <Text style={[styles.pesanan, styles.homeTypo]}>Pesanan</Text>
        <Text style={[styles.keranjang, styles.homeTypo, styles.homeTypo1]}>
          Keranjang
        </Text>
        <Text
          style={[
            styles.chat,
            styles.chatPosition,
            styles.homeTypo,
            styles.homeTypo1,
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
          style={[styles.chat20, styles.chatPosition, styles.chat20Layout]}
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
  groupParentLayout: {
    width: 332,
    position: "absolute",
  },
  pathIconPosition: {
    left: 1,
    position: "absolute",
  },
  childShadowBox: {
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupChildLayout1: {
    borderRadius: Border.br_lg,
    top: 0,
    height: 294,
  },
  boxLayout: {
    height: 25,
    width: 25,
    position: "absolute",
  },
  heartPosition2: {
    top: 202,
    width: 25,
  },
  tasTypo: {
    width: 124,
    top: 170,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  tasTypo1: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    position: "absolute",
  },
  tasTypo2: {
    fontSize: FontSize.size_base,
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
  },
  componentShadowBox: {
    width: 90,
    backgroundColor: Color.gray_300,
    height: 25,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  allProductTypo: {
    textAlign: "center",
    fontFamily: FontFamily.roboto,
    position: "absolute",
  },
  vectorParentPosition: {
    top: 308,
    width: 160,
    height: 294,
    position: "absolute",
  },
  heartPosition1: {
    top: 203,
    height: 25,
    width: 25,
    position: "absolute",
  },
  pathIcon2Position: {
    left: 2,
    position: "absolute",
  },
  box3Bg: {
    backgroundColor: Color.white,
    top: 0,
  },
  groupViewPosition: {
    top: 615,
    width: 160,
    height: 294,
    position: "absolute",
  },
  heartPosition: {
    top: 193,
    height: 25,
    width: 25,
    position: "absolute",
  },
  rp999000003Typo: {
    left: 12,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.openSansHebrewCondensed,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homeLayout: {
    width: 35,
    position: "absolute",
  },
  halloTypo: {
    fontSize: FontSize.size_6xl,
    left: 24,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
    color: Color.black,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild12Layout: {
    height: 40,
    width: 307,
    position: "absolute",
  },
  chat20Layout: {
    height: 30,
    width: 30,
  },
  groupWrapperLayout: {
    height: 162,
    position: "absolute",
  },
  groupChildLayout: {
    width: 314,
    height: 162,
    borderRadius: Border.br_md,
    top: 0,
    position: "absolute",
  },
  groupChild16Layout: {
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
    color: Color.beige,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.roboto,
    textAlign: "left",
  },
  homeTypo1: {
    top: 39,
    color: Color.beige,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
  },
  chatPosition: {
    left: 297,
    position: "absolute",
  },
  groupChild: {
    borderColor: "#000",
    width: 160,
    left: 0,
  },
  box: {
    left: 0,
    top: 0,
  },
  pathIcon: {
    top: 3,
    width: 22,
    height: 20,
  },
  heart: {
    left: 117,
  },
  groupInner: {
    top: 12,
    width: 140,
    height: 147,
    borderRadius: Border.br_md,
    left: 10,
    position: "absolute",
  },
  tasBahuAlcott: {
    left: 18,
  },
  rp109900000: {
    top: 207,
    left: 18,
  },
  component5Child: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: "#e4823b",
    borderRadius: Border.br_md,
  },
  allProduct: {
    top: "18.75%",
    left: "16.76%",
    fontSize: FontSize.size_lg,
    color: Color.orange,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.roboto,
  },
  component5: {
    top: 238,
    left: 35,
  },
  rectangleParent: {
    width: 160,
    top: 0,
    height: 294,
  },
  tasHobiBraided: {
    left: 10,
  },
  rp149900000: {
    top: 206,
    left: 10,
  },
  component6: {
    top: 237,
    left: 35,
  },
  heart1: {
    left: 121,
  },
  rectangleGroup: {
    left: 172,
    width: 160,
    top: 0,
    height: 294,
    position: "absolute",
  },
  groupChild2: {
    left: -4,
    width: 168,
    position: "absolute",
  },
  component1: {
    top: 241,
    left: 35,
  },
  pathIcon2: {
    top: 4,
    width: 20,
    height: 18,
  },
  heart2: {
    left: 124,
  },
  rp99900000: {
    top: 208,
    left: 10,
  },
  tasBahuHalf: {
    top: 188,
    left: 10,
  },
  vectorParent: {
    left: 0,
  },
  box3: {
    left: 0,
    top: 0,
  },
  heart3: {
    left: 117,
  },
  rectangleContainer: {
    left: 172,
  },
  heart4: {
    left: 117,
  },
  rp999000001: {
    top: 198,
    left: 10,
  },
  tasBahuQoa: {
    width: 139,
    top: 168,
    left: 10,
  },
  component3: {
    top: 233,
    left: 35,
  },
  groupView: {
    left: 0,
  },
  heart5: {
    left: 122,
  },
  rp999000003: {
    top: 198,
  },
  tasBahuGabine: {
    width: 138,
    top: 168,
  },
  component4: {
    top: 231,
    left: 36,
  },
  rectangleParent1: {
    left: 172,
  },
  groupParent: {
    height: 909,
    left: 0,
    top: 0,
  },
  dashboardInner: {
    top: 401,
    left: 16,
    height: 294,
  },
  icon: {
    overflow: "hidden",
  },
  notification: {
    left: 256,
    height: 35,
    top: 32,
  },
  hallo: {
    top: 28,
  },
  indriyas: {
    top: 66,
  },
  groupChild12: {
    backgroundColor: Color.gray_400,
    borderRadius: Border.br_md,
    left: 0,
    top: 0,
  },
  searchForBrand: {
    top: 10,
    left: 46,
    fontSize: FontSize.size_4xl,
    color: Color.gray_500,
  },
  searchIcon: {
    width: 24,
    height: 24,
    top: 8,
    left: 10,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent2: {
    top: 129,
    left: 24,
    width: 307,
  },
  produkKami: {
    top: 371,
    fontSize: FontSize.size_3xl,
    left: 17,
  },
  profile: {
    left: 301,
    top: 32,
    position: "absolute",
  },
  groupChild13: {
    left: 0,
  },
  groupChild14: {
    left: 329,
  },
  groupChild15: {
    left: 665,
  },
  rectangleParent3: {
    width: 979,
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 190,
    width: 316,
    left: 17,
  },
  notificationParent: {
    width: 356,
    height: 401,
    top: 0,
    overflow: "hidden",
  },
  groupChild16: {
    borderTopLeftRadius: Border.br_md,
    borderTopRightRadius: Border.br_md,
    backgroundColor: Color.orange,
    borderColor: "rgba(254, 188, 200, 0.88)",
    borderTopWidth: 1,
    borderStyle: "solid",
    width: 360,
    top: 0,
  },
  note: {
    width: 27,
    top: 7,
    left: 124,
  },
  home11Icon: {
    width: 29,
    top: 7,
    left: 35,
    overflow: "hidden",
  },
  home: {
    left: 32,
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
    width: 26,
    top: 8,
  },
  chat20: {
    top: 7,
  },
  rectangleParent4: {
    top: 732,
  },
  dashboard: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Dashboard;
