import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Button, TextInput, Headline } from "react-native-paper";
import { AppRoutes } from "../navigation/AppRoutes";

export function LoginScreen(props: any) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Headline>Headline</Headline>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        keyboardType="email-address"
        autoComplete={"false"}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry={visible}
        onChangeText={(password) => setPassword(password)}
        keyboardType="visible-password"
        autoComplete={"false"}
        right={
          <TextInput.Icon
            name={"eye"}
            onPress={() => {
              setVisible(!visible);
            }}
          />
        }
      />
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate(AppRoutes.TERMS_SCREEN)}
      >
        Soumettre
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 55,
    flex: 1,
    backgroundColor: "#fff",
  },
  Headline: {
    textAlign: "center",
    width: 55,
    backgroundColor: "#3C76FF",
  },
});
