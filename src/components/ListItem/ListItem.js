import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const listItem = props => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          resizeMode="cover"
          source={props.placeImage}
          style={styles.placeImage}
        />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 5,
    width: "100%",
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
  }
});

export default listItem;
