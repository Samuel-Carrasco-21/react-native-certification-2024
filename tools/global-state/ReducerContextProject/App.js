import Navigator from "./src/navigation/Navigator";
import { StoreProvider } from "./src/store/StoreReducer";

export default function App() {
  return (
    <StoreProvider>
      <Navigator/>
    </StoreProvider>
  );
}
