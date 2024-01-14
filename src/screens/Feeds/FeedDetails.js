import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { SharedElement } from "react-navigation-shared-element";

import { Header } from "../../components";
import { icons } from "../../helper/iconConstant";
import { colors } from "../../helper/colorConstant";
import { stringConst } from "../../helper/constants";
import { goBack } from "../../helper/rootNavigation";
import { fontSize, hp, statusBarHeight, wp } from "../../helper/utilities";

const FeedDetails = ({ route }) => {
  const { data } = route.params;
  return (
    <View style={styles.mainContainer}>
      <Header
        isLeftIcon
        source={icons.back}
        onBackPress={() => goBack()}
        leftTitle={stringConst.back}
        imgStyle={{ tintColor: colors.white }}
        centerTitle={stringConst.feedDetails}
        centerTextStyle={{ color: colors.white }}
        mainContainer={{ backgroundColor: colors.darkGreen }}
      />
      <ScrollView style={styles.scrollViewStyle}>
        <SharedElement id={data?.id}>
          <View>
            <Image
              style={styles.imgStyle}
              resizeMode={stringConst.cover}
              source={{ uri: data?.thumbnail }}
            />
            <View style={styles.txtDetailsMainView}>
              <Text style={styles.titleTxtStyle}>{data?.title}</Text>
              <Text style={styles.valueStyle}>
                {stringConst.brand}
                <Text style={styles.titleStyle}>{data?.brand}</Text>
              </Text>
              <Text style={styles.valueStyle}>
                {stringConst.category}
                <Text style={styles.titleStyle}>{data?.category}</Text>
              </Text>
              <Text style={styles.valueStyle}>
                {stringConst.price}
                <Text style={styles.titleStyle}>{`$${data?.price}`}</Text>
              </Text>
              <Text style={styles.valueStyle}>{data?.description}</Text>
            </View>
          </View>
        </SharedElement>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgStyle: {
    width: wp(345),
    height: hp(250),
    borderRadius: wp(10),
  },
  backBtnMainView: {
    marginLeft: wp(10),
    borderRadius: wp(8),
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    paddingVertical: wp(8),
    paddingHorizontal: wp(10),
    marginTop: statusBarHeight,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  backIconStyle: {
    width: wp(18),
    height: wp(18),
    tintColor: colors.white,
  },
  backTxtStyle: {
    marginLeft: wp(8),
    fontWeight: "bold",
    color: colors.white,
    fontSize: fontSize(16),
  },
  scrollViewStyle: {
    padding: wp(15),
    paddingTop: hp(22),
  },
  txtDetailsMainView: {
    paddingVertical: wp(18),
    paddingHorizontal: wp(8),
  },
  titleTxtStyle: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: fontSize(18),
  },
  titleStyle: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: fontSize(16),
  },
  valueStyle: {
    marginTop: hp(10),
    fontWeight: "400",
    color: colors.black,
    fontSize: fontSize(16),
  },
});

export default FeedDetails;
