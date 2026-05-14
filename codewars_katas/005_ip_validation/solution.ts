// 005_ip_validation/solution.ts

export const isValidIP = (str: string): boolean => {
  const num = `(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])`;
  const ipv4Pattern = new RegExp(`^${num}\\.${num}\\.${num}\\.${num}$`);
  return ipv4Pattern.test(str);
};
