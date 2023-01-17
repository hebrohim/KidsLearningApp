let alphabets = [
  {
    letter: "A",
    word: "Apple",
    source: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
  },
  {
    letter: "B",
    word: "Ball",
    source:
      "https://www.ikea.com/us/en/images/products/sparka-soft-toy-soccer-ball-black-white__0981434_pe815368_s5.jpg?f=s",
  },
  {
    letter: "C",
    word: "Car",
    source:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-honda-civic-sedan-1558453497.jpg?crop=1xw:0.9997727789138833xh;center,top&resize=480:*",
  },
  {
    letter: "D",
    word: "Desk",
    source:
      "https://cdn.shopify.com/s/files/1/1185/9434/products/modera-4ft-office-desk-14248690247_600x.jpg?v=1586902739",
  },
];
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
// display.innerHTML = alphabets[0]

let i = 0;

const next = () => {
  // console.log(alphabets[i])

  display.innerHTML = `${alphabets[i].letter}  <br/> ${alphabets[i].word}`;

  document.querySelector("#img").src = `${alphabets[i].source}`;

  i++;
};

btn.addEventListener("click", next);
