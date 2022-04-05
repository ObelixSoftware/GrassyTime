import { AppRegistry } from "react-native";
import WebApp from "./App.web";
import { displayName } from "./app.json"

AppRegistry.registerComponent(displayName, () => WebApp);
AppRegistry.runApplication(displayName, {
  rootTag: document.getElementById("root"),
});
