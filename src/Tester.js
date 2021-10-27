import React, { useContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "blue"
  }
};

const ThemeContext = React.createContext();

export default function Tester() {
  const [themeData, setThemeData] = useState(themes.dark);
  const [auth, setAuth] = useState(0);

  const changeTheme = () => {
    setThemeData(themes.light);
    setAuth(1);
  }

  const revertTheme = () => {
    setThemeData(themes.dark);
    setAuth(0);
  }

  return (
    <ThemeContext.Provider value={{ themeData, auth, changeTheme, revertTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <button onClick={theme.changeTheme} style={{ background: theme.themeData.background, color: theme.themeData.foreground }}>
        I am styled by theme context!
      </button>
      <button onClick={theme.revertTheme} style={{ background: theme.themeData.background, color: theme.themeData.foreground }}>
        I am styled by theme context!
      </button>
      {theme.auth ? "Yes" : "No"}
    </>
  );
}