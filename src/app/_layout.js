import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Slot } from "expo-router";
// import Home from '../app/index';
export default function RootLayout() {
  return (
    <Provider store={store}>
      <Slot />
    </Provider>
  );
}
