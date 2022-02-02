import * as React from "react";
import { StyleSheet, Text, StatusBar, View } from "react-native";
import { Button, Card } from "react-native-paper";
import { AppRoutes } from "../navigation/AppRoutes";

interface StarshipDetailItems {
  items: any;
}

export function StarShipsDetailScreen(items: any) {
  const {
    cost_in_credits,
    length,
    manufacturer,
    model,
    name,
    passengers,
    starship_class,
    cargo_capacity
  } = items.route.params.items
  return (
    <Card>
      <View style={styles.card}>
        <Card.Content style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.description}>
            <Text>{model}</Text>
            <Text>{manufacturer}</Text>
            <Text>{length}</Text>
            <Text>{passengers}</Text>
            <Text>{starship_class}</Text>
            <Text>{cargo_capacity}</Text>
            <Text>{cost_in_credits}</Text>
          </View>
        </Card.Content>
      </View>
    </Card>
  );
}

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
