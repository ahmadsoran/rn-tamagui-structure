const baseUrl = __DEV__ ? "" : ("" as const);
const AutoLogin = `/auto-signin` as const;

export default {
  baseUrl,
  AutoLogin,
};
