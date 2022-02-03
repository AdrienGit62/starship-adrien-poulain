import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import { NetworkProvider } from "react-native-offline";

const Offline = () => {
  return (
    <NetworkProvider>
      <View>
        <Text style={styles.container}>You are not connected</Text>
      </View>
    </NetworkProvider>
  );
};

export default Offline;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginHorizontal: 20,
    position: "absolute",
    top: 55,
    width: "90%",
    borderRadius: 10,
    backgroundColor: Colors.red100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    color: Colors.red800,
  },
});
