import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSeleted(info.item.key)}
        />
      )}
    />
  );
};

const styles = {
  listContainer: {
    width: "100%"
  }
};

export default placeList;
