import { slugfy } from "./slugfy";

export const compareStrings = (string1, string2) => {
  return slugfy(string1) === slugfy(string2);
};