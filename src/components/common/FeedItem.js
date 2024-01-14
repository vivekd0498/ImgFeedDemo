import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {fontSize, wp} from '../../helper/utilities';
import {SharedElement} from 'react-navigation-shared-element';

export default function FeedItem({data, onPress, title, source}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <SharedElement id={data?.id}>
        <Image
          resizeMode={stringConst.cover}
          source={source}
          style={styles.imgStyle}
        />
      </SharedElement>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  imgStyle: {
    width: wp(165),
    height: wp(165),
    borderRadius: wp(8),
  },
  textStyle: {
    width: wp(165),
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
    fontSize: fontSize(16),
    paddingVertical: wp(6),
    paddingHorizontal: wp(8),
  },
});
