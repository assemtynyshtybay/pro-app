import { useContext } from "react";
import { ThemeContext } from "./hocs/ThemeContext";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${isDarkTheme && "dark"}`}>
      <NavBar />
    </div>
  );
}

export default App;
