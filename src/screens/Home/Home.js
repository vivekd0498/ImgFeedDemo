import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";

import { useDispatch } from "react-redux";
import * as Animatable from "react-native-animatable";

import { hp, wp } from "../../helper/utilities";
import { FeedItem, Header } from "../../components";
import { colors } from "../../helper/colorConstant";
import { stringConst } from "../../helper/constants";
import { navigate } from "../../helper/rootNavigation";
import { getProductDetails } from "../../actions/ProductAction";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  const AnimatableView = Animatable.createAnimatableComponent(View);

  useEffect(() => {
    setIsLoading(true);
    let request = {
      onSuccess: (res) => {
        if (res) {
          setProductList(res);
          setIsLoading(false);
        }
      },
      onFail: () => {
        setIsLoading(false);
      },
    };
    dispatch(getProductDetails(request));
  }, []);

  const onItemPress = (item) => {
    navigate("FeedDetails", { data: item });
  };

  const renderItem = ({ item, index }) => {
    const animation = {
      from: {
        opacity: 0,
        translateX: 60,
      },
      to: {
        opacity: 1,
        translateX: 0,
      },
    };
    return (
      <AnimatableView
        useNativeDriver
        animation={animation}
        delay={250 + (index + 1) * 200}
        style={styles.feedItemMainView}
      >
        <FeedItem
          data={item}
          onPress={() => onItemPress(item)}
          title={item?.title}
          source={{ uri: item?.thumbnail }}
        />
      </AnimatableView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header centerTitle={stringConst.feed} />
      {!isLoading ? (
        <FlatList
          numColumns={2}
          data={productList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: hp(5) }}
          ListHeaderComponent={() => <View style={styles.itemSepratorView} />}
          ListFooterComponent={() => <View style={styles.bottomView} />}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSepratorView} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.indicatorView}>
          <ActivityIndicator size={"large"} color={colors.black} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  innerMainView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  feedItemMainView: {
    shadowOffset: {
      width: wp(2),
      height: wp(2),
    },
    elevation: wp(10),
    shadowOpacity: 0.5,
    marginLeft: wp(15),
    borderRadius: wp(8),
    backgroundColor: colors.white,
  },
  itemSepratorView: {
    height: hp(18),
  },
  bottomView: {
    height: hp(40),
  },
  indicatorView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
});

export default Home;
