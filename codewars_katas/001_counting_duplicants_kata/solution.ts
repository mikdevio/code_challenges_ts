// counting_duplicates.ts

/* Kata 001: Count the number of duplicates

Write a function that will return the count of distinct case-insensitive
alphabetic characters and numeric digits that occur more than once in the
input string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.
*/

export const duplicateCount = (text: string): number => {
  let rep: number = 0;
  let c_eval: string = "";

  const textSet = [...new Set(text.toLocaleLowerCase())];

  for (const c of textSet) {
    let c_re = new RegExp(c, "gi");
    if ((text.toLocaleLowerCase().match(c_re) || []).length > 1) {
      rep += 1;
    }
  }

  return rep;
}

const text_1 = "Indivisibility";
const text_2 = "Indivisibilities";

const c_1 = duplicateCount(text_1);
const c_2 = duplicateCount(text_2);

console.log(c_1);
console.log(c_2);
