/**
 * Centralized Color Palette for Portfolio - SIMPLE 3-COLOR VERSION
 *
 *   LIGHT mode:  Ivory (background), Navy (text), Dusty Blue (buttons and soft details)
 *   DARK mode:   Navy (background), Ivory (text), Dusty Blue (accent)
 *
 * The key names are the same as before so every component keeps working.
 *
 * HOW THE "pink" KEY WORKS NOW:
 *   Many components use colors.pink[...] in BOTH modes. So instead of fixed
 *   colors, the values below point to CSS variables defined in App.css that
 *   change automatically with the mode:
 *     var(--accent)    -> Navy in light mode, Dusty Blue in dark mode
 *     var(--text-main) -> Navy in light mode, Ivory in dark mode
 *     var(--border)    -> a soft accent-colored border
 */

// ---- Palette ----
const IVORY = '#E8E1D6';
const NAVY = '#1F2530';
const DUSTY = '#A7B8C7';

// Subtle tints made from the same colors (for cards and muted text)
const CARD_LIGHT = '#DED8CE';   // ivory with a touch of navy
const CARD_DARK = '#2B3039';    // navy with a touch of ivory
const MUTED_LIGHT = '#575A5F';  // navy, softened
const MUTED_DARK = '#ACA9A4';   // ivory, softened

export const colors = {
  // Base colors
  white: IVORY,           // "white" is ivory in this theme
  black: '#000000',
  transparent: 'transparent',

  // Accent scale (still named "pink" so the components keep working)
  pink: {
    25: IVORY,
    50: IVORY,
    100: IVORY,
    200: 'var(--border)',
    300: DUSTY,                // fixed dusty blue (dark mode accent)
    400: 'var(--accent)',
    500: 'var(--accent)',      // navy (light) / dusty blue (dark)
    600: 'var(--accent)',
    700: 'var(--text-main)',   // navy (light) / ivory (dark)
    800: 'var(--text-main)',
    900: 'var(--text-main)',
  },

  // Navy scale (backgrounds, cards and text)
  dark: {
    50: IVORY,
    100: IVORY,
    200: IVORY,
    300: '#A9A9A6',
    400: '#8A8C8E',
    500: '#6D7076',
    600: NAVY,
    700: '#252B36',
    800: CARD_DARK,
    900: NAVY,
    950: NAVY,
  },

  // Semantic colors
  background: {
    light: {
      primary: IVORY,
      secondary: CARD_LIGHT,
      gradient: IVORY,
      gradientEnd: IVORY,
      overlay: 'rgba(232, 225, 214, 0.6)',
      sections: {
        about: IVORY,
        skills: IVORY,
        projects: IVORY,
        experience: IVORY,
        //certifications: IVORY,
      },
    },
    dark: {
      primary: NAVY,
      secondary: CARD_DARK,
      gradient: NAVY,
      gradientEnd: NAVY,
      overlay: 'rgba(0, 0, 0, 0.7)',
      sections: {
        about: NAVY,
        skills: NAVY,
        projects: NAVY,
        experience: NAVY,
        // certifications: NAVY,
      },
    },
  },

  // Text colors
  text: {
    light: {
      primary: NAVY,
      secondary: NAVY,
      tertiary: MUTED_LIGHT,
      accent: NAVY,
      pink: NAVY,
    },
    dark: {
      primary: IVORY,
      secondary: IVORY,
      tertiary: MUTED_DARK,
      accent: DUSTY,
      pink: DUSTY,
    },
  },

  // Interactive elements
  interactive: {
    light: {
      primary: 'rgba(167, 184, 199, 0.35)',
      hover: 'rgba(167, 184, 199, 0.55)',
      active: NAVY,
      focus: 'rgba(31, 37, 48, 0.25)',
    },
    dark: {
      primary: 'rgba(167, 184, 199, 0.1)',
      hover: 'rgba(167, 184, 199, 0.2)',
      active: DUSTY,
      focus: 'rgba(167, 184, 199, 0.3)',
    },
  },

  // Navigation specific
  navigation: {
    light: {
      background: 'rgba(232, 225, 214, 0.7)',
      backgroundScrolled: 'rgba(232, 225, 214, 0.92)',
      border: 'rgba(167, 184, 199, 0.5)',
      borderScrolled: 'rgba(167, 184, 199, 0.8)',
      shadow: 'rgba(31, 37, 48, 0.06)',
      shadowScrolled: 'rgba(31, 37, 48, 0.1)',
      mobile: 'rgba(232, 225, 214, 0.97)',
    },
    dark: {
      background: 'rgba(31, 37, 48, 0.6)',
      backgroundScrolled: 'rgba(31, 37, 48, 0.85)',
      border: 'rgba(167, 184, 199, 0.3)',
      borderScrolled: 'rgba(167, 184, 199, 0.4)',
      shadow: 'rgba(0, 0, 0, 0.2)',
      shadowScrolled: 'rgba(0, 0, 0, 0.3)',
      mobile: 'rgba(31, 37, 48, 0.97)',
    },
  },

  // Button variants
  button: {
    primary: {
      light: {
        background: DUSTY,
        text: NAVY,
        hover: '#BDCBD7',
        shadow: 'rgba(31, 37, 48, 0.2)',
      },
      dark: {
        background: DUSTY,
        text: NAVY,
        hover: '#BDCBD7',
        shadow: 'rgba(0, 0, 0, 0.35)',
      },
    },
    secondary: {
      light: {
        background: 'rgba(232, 225, 214, 0.9)',
        text: NAVY,
        border: DUSTY,
        hover: CARD_LIGHT,
      },
      dark: {
        background: CARD_DARK,
        text: IVORY,
        border: 'rgba(167, 184, 199, 0.4)',
        hover: 'rgba(167, 184, 199, 0.1)',
      },
    },
    outline: {
      light: {
        background: 'transparent',
        text: NAVY,
        border: NAVY,
        hover: CARD_LIGHT,
      },
      dark: {
        background: 'transparent',
        text: DUSTY,
        border: DUSTY,
        hover: 'rgba(167, 184, 199, 0.1)',
      },
    },
  },

  // Card colors
  card: {
    light: {
      background: CARD_LIGHT,
      border: DUSTY,
      shadow: 'rgba(31, 37, 48, 0.1)',
    },
    dark: {
      background: CARD_DARK,
      border: 'rgba(167, 184, 199, 0.5)',
      shadow: 'rgba(0, 0, 0, 0.3)',
    },
  },

  // Special effects
  effects: {
    glow: 'rgba(167, 184, 199, 0.25)',
    dropShadow: 'rgba(31, 37, 48, 0.3)',
    textShadow: 'rgba(0, 0, 0, 0.1)',
    blur: 'rgba(255, 255, 255, 0.1)',
  },

  // Utility colors
  utility: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    neutral: '#6B7280',
  },

  // Special colors
  special: {
    dragMe: NAVY,
    aurora: {
      dark: DUSTY,
      light: {
        1: '#D9DEE0',
        2: '#C9D3DB',
        3: '#DDDFDC',
      }
    }
  },
} as const;

// Type definitions for better TypeScript support
type ColorTheme = 'light' | 'dark';
type ColorVariant = keyof typeof colors;

export type { ColorTheme, ColorVariant };

// Helper function to get theme-specific colors
export const getThemeColors = (theme: ColorTheme) => ({
  background: colors.background[theme],
  text: colors.text[theme],
  interactive: colors.interactive[theme],
  navigation: colors.navigation[theme],
  button: {
    primary: colors.button.primary[theme],
    secondary: colors.button.secondary[theme],
    outline: colors.button.outline[theme],
  },
  card: colors.card[theme],
});
