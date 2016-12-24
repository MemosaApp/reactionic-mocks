const baseContext = {
  isIos: false,
  isAndroid: false,
};

export const iosContext = {
  ...baseContext,
  isIos: true,
  isAndroid: false,
};

export const androidContext = {
  ...baseContext,
  isIos: false,
  isAndroid: true,
};

export default baseContext;
