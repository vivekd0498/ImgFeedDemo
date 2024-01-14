import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {hp, wp, fontSize, statusBarHeight} from '../../helper/utilities';

export default function Header({
  source,
  imgStyle,
  isLeftIcon,
  centerTitle,
  onBackPress,
  mainContainer,
  centerTextStyle,
}) {
  return (
    <View style={[styles.mainContainer, mainContainer]}>
      {isLeftIcon ? (
        <TouchableOpacity
          style={styles.btnView}
          onPress={onBackPress}
          hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
          {/* <Text style={styles.backText}>{leftTitle}</Text> */}
          <Image source={source} style={[styles.imgStyle, imgStyle]} />
        </TouchableOpacity>
      ) : (
        <View style={styles.btnView} />
      )}
      <Text style={[styles.centerText, centerTextStyle]}>{centerTitle}</Text>
      <View style={styles.btnView} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    elevation: wp(10),
    flexDirection: 'row',
    paddingBottom: hp(16),
    backgroundColor: '#f0e2cb',
    justifyContent: 'space-between',
    paddingTop: statusBarHeight + hp(8),
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: wp(5),
    },
    shadowColor: colors.black,
  },
  btnView: {
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: wp(15),
    height: wp(15),
    tintColor: colors.black,
  },
  backText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fontSize(16),
  },
  centerText: {
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
    fontSize: fontSize(20),
  },
});
