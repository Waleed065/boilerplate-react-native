import {
  errorContrastText,
  errorDark,
  errorLight,
  errorMain,
  grey100,
  grey200,
  grey300,
  grey400,
  grey50,
  grey500,
  grey600,
  grey700,
  grey800,
  grey900,
  greyA100,
  greyA200,
  greyA400,
  greyA700,
  infoContrastText,
  infoDark,
  infoLight,
  infoMain,
  primaryContrast,
  primaryDark,
  primaryLight,
  primaryMain,
  secondaryContrastText,
  secondaryDark,
  secondaryLight,
  secondaryMain,
  successContrastText,
  successDark,
  successLight,
  successMain,
  warningContrast,
  warningDark,
  warningLight,
  warningMain,
} from '../constants/theme';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const grey = {
  50: grey50,
  100: grey100,
  200: grey200,
  300: grey300,
  400: grey400,
  500: grey500,
  600: grey600,
  700: grey700,
  800: grey800,
  900: grey900,
  A100: greyA100,
  A200: greyA200,
  A400: greyA400,
  A700: greyA700,
};

const primaryShades = {
  light: primaryLight,
  main: primaryMain,
  dark: primaryDark,
  contrastText: primaryContrast,
};

const secondaryShades = {
  light: secondaryLight,
  main: secondaryMain,
  dark: secondaryDark,
  contrastText: secondaryContrastText,
};

const infoShades = {
  light: infoLight,
  main: infoMain,
  dark: infoDark,
  contrastText: infoContrastText,
};
const successShades = {
  light: successLight,
  main: successMain,
  dark: successDark,
  contrastText: successContrastText,
};
const warningShades = {
  light: warningLight,
  main: warningMain,
  dark: warningDark,
  contrastText: warningContrast,
};
const errorShades = {
  light: errorLight,
  main: errorMain,
  dark: errorDark,
  contrastText: errorContrastText,
};

const gradients = {
  primary: createGradient(primaryShades.light, primaryShades.main),
  infoShades: createGradient(infoShades.light, infoShades.main),
  successShades: createGradient(successShades.light, successShades.main),
  warningShades: createGradient(warningShades.light, warningShades.main),
  errorShades: createGradient(errorShades.light, errorShades.main),
};

// default export palette
const colors = {
  primary: primaryMain,
  background: primaryContrast,
  // surface: ,
  // accent: ,
  error: errorMain,
  text: grey800,
  // onSurface: ,
  disabled: grey500,
  placeholder: grey600,
  // backdrop: ,
  // notification: ,

  common: {black: '#000', white: '#fff'},
  primaryShades: primaryShades,
  secondaryShades,
  infoShades,
  successShades,
  warningShades,
  errorShades,
  grey,
  gradients,
  divider: greyA400,
};
export default colors