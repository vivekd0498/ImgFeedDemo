import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';
import {stringConst} from '../../helper/constants';

export default function Button({onPress, title, source}) {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Image
        source={source}
        style={styles.imgStyle}
        resizeMode={stringConst.contain}
      />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    elevation: wp(10),
    shadowRadius: wp(5),
    shadowOpacity: 0.5,
    borderRadius: wp(3),
    borderRadius: wp(8),
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: hp(10),
    paddingHorizontal: wp(18),
    shadowColor: colors.gray,
    shadowOffset: {
      width: wp(2),
      height: wp(2),
    },
    backgroundColor: colors.twitter,
  },
  imgStyle: {
    width: wp(20),
    height: wp(20),
  },
  textStyle: {
    marginLeft: wp(12),
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fontSize(20),
  },
});
