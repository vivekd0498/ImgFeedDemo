import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { enableScreens } from "react-native-screens";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "../screens/Home/Home";
import FeedDetails from "../screens/Feeds/FeedDetails";
import { navigationRef } from "../helper/rootNavigation";

enableScreens();

const Stack = createSharedElementStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen
          name={"FeedDetails"}
          component={FeedDetails}
          sharedElements={(route) => {
            const { data } = route.params;
            return [
              {
                id: data?.id,
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
