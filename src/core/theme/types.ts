export type ThemeType = "light" | "dark";

export type Theme = {
  label: ThemeType;

  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
    };
    onPrimary: {
      highEmphasis: string;
      mediumEmphasis: string;
      disable: string;
    };

    surface: string;
    onSurface: {
      highEmphasis: string;
      mediumEmphasis: string;
      disable: string;
      outline: string;
    };

    success: string;
    error: string;

    background: string;
    onBackground: string;
  };
};
