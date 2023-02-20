import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000000",
    accent: "#000000",
    background: "#ffffff",
    text: "#000000",
    placeholder: "#000000",
    disabled: "#000000",
  },
};

export { myTheme as NavigationTheme };
