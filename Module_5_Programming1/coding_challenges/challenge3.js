// codepen link: https://codepen.io/bryantnovas/pen/GRobrYw?editors=0012

const quote =
  "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me,";

let split_quote = quote.split(" ");
let replaced_words = split_quote.map((word) => {
  if (word.includes("s") || word.includes("S")) {
    return word.replace(/s/gi, "$");
  }
  return word;
});
let modified_quote = replaced_words.join(" ");

console.log(modified_quote);
