export const uiActions = {
  toggleTheme: (state: string) => {
    return state === "dark-theme" ? "light-theme" : "dark-theme";
  },
};
