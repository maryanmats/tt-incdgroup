import "./App.css";
import Navigation from "./navigation/navigation";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { DrawerProvider } from "./context/DrawerContext";

function App() {
  return (
    <SkeletonTheme baseColor="#4c4e54" highlightColor="#5a5d64">
      <DrawerProvider>
        <Navigation />
      </DrawerProvider>
    </SkeletonTheme>
  );
}

export default App;
