import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {LoginScreen} from "../screens/LoginScreen";
import TermsScreen from "../screens/TermScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRoutes } from "./AppRoutes";
import StarshipFeedScreen from "../screens/StarshipFeedScreen";

const Stack = createNativeStackNavigator();

export default function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={AppRoutes.LOGIN_SCREEN}>
        <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={AppRoutes.TERMS_SCREEN} component={TermsScreen} />
        <Stack.Screen name={AppRoutes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
