import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startMainTabs = async () => {
  const icon1 = await Icon.getImageSource("md-map", 30);
  const icon2 = await Icon.getImageSource("ios-share-alt", 30);
  const icon3 = await Icon.getImageSource("ios-menu", 30);

  await Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "awesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place",
        icon: icon1,
        navigatorButtons: {
          leftButtons: [
            {
              icon: icon3,
              title: "Menu",
              id: "sideDrawerToggle"
            }
          ]
        }
      },
      {
        screen: "awesome-places.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place",
        icon: icon2,
        navigatorButtons: {
          leftButtons: [
            {
              icon: icon3,
              title: "Menu",
              id: "sideDrawerToggle"
            }
          ]
        }
      }
    ],
    drawer: {
      left: {
        screen: "awesome-places.SideDrawer"
      }
    }
  });
};

export default startMainTabs;
