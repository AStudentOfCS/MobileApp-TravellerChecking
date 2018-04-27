import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import configureStore from "./src/store/configureStore";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

// Start an App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});

// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from "react-redux";

// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
// import * as actions from "./src/store/actions";

// class App extends Component {
//   state = {
//     places: [],
//     selectedPlace: null
//   };

//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   placeDeletedHandler = () => {
//     this.props.onDeletePlace();
//   };

//   modalClosedHandler = () => {
//     this.props.onUnselectPlace();
//   };

//   render() {
//     const { places, selectedPlace } = this.props;

//     return (
//       <View style={styles.container}>
//         <PlaceDetail
//           selectedPlace={selectedPlace}
//           onItemDeleted={this.placeDeletedHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlaceAdded={this.placeAddedHandler} />
//         <PlaceList places={places} onItemSeleted={this.placeSelectedHandler} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 26,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "flex-start"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.placesReducer.places,
//     selectedPlace: state.placesReducer.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => dispatch(actions.addPlace(name)),
//     onDeletePlace: () => dispatch(actions.deletePlace()),
//     onSelectPlace: key => dispatch(actions.selectPlace(key)),
//     onUnselectPlace: () => dispatch(actions.unselectPlace())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
