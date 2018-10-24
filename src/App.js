import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./screens/Auth/Auth";
import SharePlaceScreen from "./screens/SharePlace/SharePlace";
import FindPlaceScreen from "./screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./screens/SideDrawer/SideDrawer";
import configureStore from "./store/configureStore";

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
Navigation.registerComponent(
  "awesome-places.SideDrawer",
  () => SideDrawer,
  store,
  Provider
);

// Start a App
export default () => Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});
