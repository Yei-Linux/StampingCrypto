export const formatParams = (params) => {
  if (!params) return "";
  return Object.entries(params).reduce((acc, valueItem) => {
    const [key, value] = valueItem;
    return `${acc}${acc === "" ? "" : "&"}${key}=${value}`;
  }, "");
};
