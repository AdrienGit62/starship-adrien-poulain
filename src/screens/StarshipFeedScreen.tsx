import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { Button, Card, Title } from "react-native-paper";
import Offline from "../components/Offline";
import { useStarships } from "../hooks/useStarships";
import { alldata } from "../../api/data";
import { StarshipCard } from "../components/StarshipCard";
import { AppRoutes } from "../navigation/AppRoutes";

const Item = (title: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const StarshipFeedScreen = (props: any) => {
  const { isLoading, isError, data } = useStarships();

  if (isLoading) {
    return <Text>Loading ... </Text>;
  }
  if (isError) {
    return <Offline />;
  }
  const renderItem = (starship: any) => (
    <StarshipCard
      name={starship.item.name}
      model={starship.item.model}
      manufacturer={starship.item.manufacturer}
      cost_in_credits={starship.item.cost_in_credits}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Button
        mode="contained"
        onPress={() => props.navigation.navigate(AppRoutes.LOGIN_SCREEN)}
      >
        Se Déconnecter
      </Button>
      <Title>Starships</Title>
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
});

export default StarshipFeedScreen;
