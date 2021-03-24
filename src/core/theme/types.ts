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
      HighEmphasis: string;
      MediumEmphasis: string;
      Disable: string;
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
