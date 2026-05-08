export const stringEndsWith = (str: string, ending: string): boolean => {
  return ending === "" ? true : (str.slice(-ending.length)===ending);
}