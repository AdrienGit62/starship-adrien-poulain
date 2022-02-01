import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Button, Card } from "react-native-paper";
import Offline from "../components/Offline";
import { useStarships } from "../hooks/useStarships";
import { alldata } from "../../api/data";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const StarshipFeedScreen = () => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text>Loading ... </Text>;
  }
  if (isError) {
    return <Offline />;
  }
  const renderItem = ({ item }) => (
    <Card>
      <View style={styles.card}>
        <Card.Content style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.description}>
            <Text>{item.manufacturer}</Text>
            <Text>{item.cost_in_credits}</Text>
          </View>
          <Button mode="contained" onPress={() => console.log("Pressed")}>
            Acheter ce vaisseau
          </Button>
        </Card.Content>
      </View>
    </Card>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alldata.results}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingBottom: 88,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: 5,
    backgroundColor: "#EFEFEF",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "700",
    paddingBottom: 20,
  },
  description: {
    paddingBottom: 20,
  },
});

export default StarshipFeedScreen;
