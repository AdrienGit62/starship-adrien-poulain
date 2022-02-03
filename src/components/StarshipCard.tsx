import React from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
} from "react-native";
import {Button, Card } from "react-native-paper";
import { AppRoutes } from "../navigation/AppRoutes";

interface StarshipCardProps {
  items : any,
  props: any,
}

export function StarshipCard({
  items,
  props,
}: StarshipCardProps) {
  return (
    <Card>
      <View style={styles.card}>
        <Card.Content style={styles.item}>
          <Text style={styles.title}>{items.name}</Text>
          <View style={styles.description}>
            <Text>{items.model}</Text>
            <Text>{items.manufacturer}</Text>
            <Text>{items.cost_in_credits}</Text>
          </View>
          <Button
            mode="contained"
            onPress={() =>
              props.navigation.navigate(AppRoutes.STARSHIP_DETAIL_SCREEN, {items})
            }
          >
            Acheter ce vaisseau
          </Button>
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