import isEqual from "lodash/isEqual";

export function propAreEqual(prevProps: any, nextProps: any) {
  return isEqual(prevProps, nextProps);
}
