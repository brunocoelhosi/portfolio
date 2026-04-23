import "./App.css";
import HomePage from "./pages/Homepage";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <HomePage
      isDark={isDark}
      onToggleTheme={() => setIsDark((prev) => !prev)}
    />
  );
}

export default App;
