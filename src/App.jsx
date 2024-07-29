import { HeaderNetFlix } from "./pages/components";
import { Home } from "./pages/home/home";

export function App() {
  return (
    <>
      <div className="bg-netflix-background-image">
        <HeaderNetFlix />
        <Home />
      </div>
    </>
  );
}
