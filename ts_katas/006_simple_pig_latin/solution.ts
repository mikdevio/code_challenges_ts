// 006_simple_pig_latin

export const pigIt = (a: string): string => {
  const arrayWords: string[] = a.split(" ");
  const slicedWords = arrayWords.map(w => {
   if(/^[a-z]+$/i.test(w)) {
    return w.slice(1) + w[0] + "ay";
   }
    return w;
  });
  return slicedWords.join(" ");
}
