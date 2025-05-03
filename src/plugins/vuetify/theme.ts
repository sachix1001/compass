export const theme = {
  defaultTheme: 'light',
  themes: {
    light: {
      dark: false,
      colors: {
        primary: '#24473b',
        secondary: '#4f6c62',
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-background': '#000000',
        'on-surface': '#000000',
      },
    },
    dark: {
      dark: true,
      colors: {
        primary: '#4f6c62',
        secondary: '#24473b',
        background: '#121212',
        surface: '#121212',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-background': '#FFFFFF',
        'on-surface': '#FFFFFF',
      },
    },
  },
  defaults: {
    VApp: {
      fontFamily:
        '"Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", sans-serif',
    },
  },
};
