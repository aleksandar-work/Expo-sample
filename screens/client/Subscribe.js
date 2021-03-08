import React, { Component, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import theme from "../../Theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Actions from "../../actions/creator";
import Footer from "../../components/both/Footer";
import HeaderSmall from "../../components/both/HeaderSmall";
import ContactCard from "../../components/client/ContactCard";
//react native swiper, please check docs for more info
import Swiper from "react-native-swiper";
import SwiperFlatList from "react-native-swiper-flatlist";
const { width, height } = Dimensions.get("window");
import lang from "../../config/lang";
const { locales, getText } = lang;

//replace with your json
const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "First Item",
  },
  {
    id: "5",
    title: "Second Item",
  },
  {
    id: "6",
    title: "Third Item",
  },
  {
    id: "7",
    title: "First Item",
  },
  {
    id: "8",
    title: "Second Item",
  },
  {
    id: "9",
    title: "Third Item",
  },
];

const Subscribe = (props) => {
  const appRed = useSelector((state) => state.app);
  const authRed = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Actions.getPackagePlansAttempt());
  }, [appRed.package_plans.length]);
  // alert(JSON.stringify(appRed.package_plans))
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <HeaderSmall leftIcon="menu" rightIcon="settings" />
      </View>
      <View style={[styles.titleSpace, { flexDirection: appRed.locale == "en" ? 'row' : 'row-reverse' }]}>
        {/* space for title */}
        <Text style={styles.title}>{getText("SUBSCRIBE", appRed.locale)}</Text>
      </View>
      <View style={styles.body}>
        {/* SWIPER TO SEPARTE THE SCREENS  */}

        <SwiperFlatList showPagination paginationActiveColor={theme.primary}>
          {appRed.package_plans.map((pkg, index) => (
            <View key={index} style={styles.slide1}>
              <TouchableOpacity style={styles.mainContainer}>
                <Text style={styles.planTitle}>BEYOND PLUS</Text>
                <View
                  style={{
                    flexDirection:
                      appRed.locale == "en" ? "row" : "row-reverse",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.planCost}>
                    {appRed.locale == "en" ? pkg.name_en : pkg.name_ar}
                  </Text>
                  <Text style={styles.planDuration}>/</Text>
                  <Text style={styles.planDuration}>{pkg.duration}</Text>
                </View>
              </TouchableOpacity>
              <View style={{ height: hp(40) }}>
                <FlatList
                  data={
                    appRed.locale == "en"
                      ? pkg.features.english
                      : pkg.features.arabic
                  }
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flexDirection:
                          appRed.locale == "en" ? "row" : "row-reverse",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../../assets/tick.png")}
                        style={{ width: 15, height: 15 }}
                      />
                      <Text style={styles.featureText}>{item}</Text>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>

              <TouchableOpacity style={styles.mainBtn}
                onPress={() => {
                  dispatch(Actions.getSavePlansAttempt(pkg.id, authRed.user_id, "coupen_id"))
                }}
              >
                <Text style={styles.btnText}>
                  {getText("SUBSCRIBE", appRed.locale)}
                </Text>
              </TouchableOpacity>
            </View>
          )
          )}
        </SwiperFlatList>
      </View>
    </ImageBackground>
  );
};
export default Subscribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 24 : 0,
  },
  header: {
    flex: 1,
  },
  titleSpace: {
    flex: 1,
    // justifyContent: "center",
    paddingHorizontal: wp(6),
  },
  body: {
    flex: 8,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
    // paddingHorizontal: 25,
  },
  footer: {
    flex: 1,
  },
  title: {
    fontSize: theme.xxl / 1.2,
    color: theme.titleColor,
    fontFamily: theme.pop,
  },
  slide1: {
    flex: 1,
    width,
    paddingHorizontal: 25,
    paddingTop: hp(2),
  },
  slide2: {
    flex: 1,
    paddingTop: hp(2),
  },
  slide3: {
    flex: 1,
    paddingTop: hp(2),
  },
  mainContainer: {
    width: "100%",
    height: hp(14),
    borderRadius: 10,
    marginTop: hp(1),
  },
  planTitle: {
    color: theme.secondary,
    fontFamily: theme.pop,
    fontSize: theme.xxl,
    paddingLeft: wp(2),
  },
  planCost: {
    color: theme.primary,
    fontFamily: theme.pop,
    fontSize: theme.xxl / 1.3,
    paddingLeft: wp(2),
  },
  planDuration: {
    color: theme.secondary,
    fontFamily: theme.pop,
    fontSize: theme.medium,
    paddingLeft: wp(2),
  },
  featureText: {
    color: theme.secondary,
    fontFamily: theme.pop,
    fontSize: theme.medium,
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
  },
  mainBtn: {
    width: "100%",
    backgroundColor: theme.primary,
    justifyContent: "center",
    alignItems: "center",
    height: hp(7),
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    fontFamily: theme.pop,
    fontSize: theme.medium,
  },
});
