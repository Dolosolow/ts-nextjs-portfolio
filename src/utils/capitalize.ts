export const capitalize = (str: string, key?: string) => {
  return str
    .split(key ?? " ")
    .map((chunk) => {
      return chunk.charAt(0).toUpperCase() + chunk.slice(1);
    })
    .join(" ");
};
