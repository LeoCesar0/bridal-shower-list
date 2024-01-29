export function slugfy(string) {
  if (!string || typeof string !== "string") return "";

  string = string
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  string = string.replace(/[ \t]+/g, "-");
  return string;
}