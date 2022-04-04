import { AppRegistry } from "react-native";
import App from "./App";
import { displayName } from "./app.json"

AppRegistry.registerComponent(displayName, () => App);
AppRegistry.runApplication(displayName, {
  rootTag: document.getElementById("root"),
});
