export const parameters = {
  backgrounds: {
    default: "Light",
    values: [
      { name: "Light", value: "#ffffff" },
      { name: "Dark", value: "#121212" },
    ],

    grid: { cellSize: 4, cellAmount: 2, opacity: 0.2 },
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
};
