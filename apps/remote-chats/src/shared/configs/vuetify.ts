export type ThemeTypes = {
  name: string
  dark: boolean
  variables?: object
  colors: {
    primary?: string
    secondary?: string
    info?: string
    success?: string
    accent?: string
    warning?: string
    error?: string
    lightprimary?: string
    lightsecondary?: string
    lightsuccess?: string
    lighterror?: string
    lightinfo?: string
    lightwarning?: string
    textPrimary?: string
    textSecondary?: string
    borderColor?: string
    hoverColor?: string
    inputBorder?: string
    containerBg?: string
    background?: string
    surface?: string
    'on-surface-variant'?: string
    grey100?: string
    grey200?: string
  }
}

const DARK_BLUE_THEME: ThemeTypes = {
  name: 'DARK_BLUE_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#1e4db7',
    secondary: '#1a97f5',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#253662',
    lightsecondary: '#1C455D',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#2a3447',
    background: '#2a3447',
    hoverColor: '#333f55',
    surface: '#2a3447',
    'on-surface-variant': '#2a3447',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const DARK_RED_THEME: ThemeTypes = {
  name: 'DARK_RED_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#5e244d',
    secondary: '#ff5c8e',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#fce6ed',
    lightsecondary: '#0C4339',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#171c23',
    background: '#171c23',
    hoverColor: '#333f55',
    surface: '#171c23',
    'on-surface-variant': '#171c23',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const DARK_PURPLE_THEME: ThemeTypes = {
  name: 'DARK_PURPLE_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#402e8d',
    secondary: '#7352ff',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#26153C',
    lightsecondary: '#09454B',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#171c23',
    background: '#171c23',
    hoverColor: '#333f55',
    surface: '#171c23',
    'on-surface-variant': '#171c23',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const DARK_GREEN_THEME: ThemeTypes = {
  name: 'DARK_GREEN_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#066a73',
    secondary: '#00cec3',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#05313F',
    lightsecondary: '#282917',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#171c23',
    background: '#171c23',
    hoverColor: '#333f55',
    surface: '#171c23',
    'on-surface-variant': '#171c23',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const DARK_INDIGO_THEME: ThemeTypes = {
  name: 'DARK_INDIGO_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#11397b',
    secondary: '#1e4db7',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#003638',
    lightsecondary: '#40241C',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#171c23',
    background: '#171c23',
    hoverColor: '#333f55',
    surface: '#171c23',
    'on-surface-variant': '#171c23',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const DARK_ORANGE_THEME: ThemeTypes = {
  name: 'DARK_ORANGE_THEME',
  dark: true,
  variables: {
    'border-color': '#333F55',
  },
  colors: {
    primary: '#fb9678',
    secondary: '#03c9d7',
    info: '#539BFF',
    success: '#13DEB9',
    accent: '#FA896B',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#e5fafb',
    lightsecondary: '#082E45',
    lightsuccess: '#1B3C48',
    lighterror: '#4B313D',
    lightwarning: '#4D3A2A',
    lightinfo: '#223662',
    textPrimary: '#EAEFF4',
    textSecondary: '#7C8FAC',
    borderColor: '#333F55',
    inputBorder: '#465670',
    containerBg: '#171c23',
    background: '#171c23',
    hoverColor: '#333f55',
    surface: '#171c23',
    'on-surface-variant': '#171c23',
    grey100: '#333F55',
    grey200: '#465670',
  },
}

const BLUE_THEME: ThemeTypes = {
  name: 'BLUE_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#1e4db7',
    secondary: '#1a97f5',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#f5fcfd',
    lightsecondary: '#E8F7FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

const RED_THEME: ThemeTypes = {
  name: 'RED_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#5e244d',
    secondary: '#ff5c8e',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#fce6ed',
    lightsecondary: '#EDFBF7',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

const PURPLE_THEME: ThemeTypes = {
  name: 'PURPLE_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#402e8d',
    secondary: '#7352ff',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#F2ECF9',
    lightsecondary: '#EDF8FA',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

const GREEN_THEME: ThemeTypes = {
  name: 'GREEN_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#066a73',
    secondary: '#00cec3',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#F4F9FB',
    lightsecondary: '#FAFBEF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

const INDIGO_THEME: ThemeTypes = {
  name: 'INDIGO_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#11397b',
    secondary: '#1e4db7',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#FFAE1F',
    error: '#FA896B',
    lightprimary: '#EBF9FA',
    lightsecondary: '#FFF5F2',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

const ORANGE_THEME: ThemeTypes = {
  name: 'ORANGE_THEME',
  dark: false,
  variables: {
    'border-color': '#e5eaef',
  },
  colors: {
    primary: '#fb9678',
    secondary: '#03c9d7',
    info: '#539BFF',
    success: '#05b187',
    accent: '#FFAB91',
    warning: '#fec90f',
    error: '#fb9678',
    lightprimary: '#e5fafb',
    lightsecondary: '#EFF9FF',
    lightsuccess: '#E6FFFA',
    lighterror: '#FDEDE8',
    lightwarning: '#FEF5E5',
    lightinfo: '#EBF3FE',
    textPrimary: '#2A3547',
    textSecondary: '#2A3547',
    borderColor: '#e5eaef',
    inputBorder: '#DFE5EF',
    containerBg: '#ffffff',
    background: '#f6f6f6',
    hoverColor: '#f6f9fc',
    surface: '#fff',
    'on-surface-variant': '#fff',
    grey100: '#F2F6FA',
    grey200: '#EAEFF4',
  },
}

export {
  DARK_BLUE_THEME,
  DARK_RED_THEME,
  DARK_ORANGE_THEME,
  DARK_PURPLE_THEME,
  DARK_GREEN_THEME,
  DARK_INDIGO_THEME,
  BLUE_THEME,
  RED_THEME,
  ORANGE_THEME,
  PURPLE_THEME,
  GREEN_THEME,
  INDIGO_THEME,
}
